import { useContext, useRef, useState } from "react";
import { PostContext } from "../../contexts/PostContext";

export default function TextTable() {
  const storyRef = useRef<HTMLDivElement>(null);
  const { setStory } = useContext(PostContext);
  const [storyText, setStoryText] = useState<string>("");

  const applyStyle = (style: Partial<CSSStyleDeclaration>, tagName: string) => {
    if (!storyRef.current) return;

    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) return;

    const range = selection.getRangeAt(0);
    const selectedText = range.toString();

    if (selectedText.length === 0) return;

    // Check if the selection is within the storyRef
    const commonAncestor = range.commonAncestorContainer;
    if (!storyRef.current.contains(commonAncestor)) {
      // Abort if selection is outside storyRef
      return;
    }

    const fragment = range.extractContents();
    const newElement = document.createElement(tagName);
    Object.assign(newElement.style, style);
    newElement.appendChild(fragment);

    // Find the parent element
    let parentElement = range.startContainer.parentElement;
    if (parentElement && storyRef.current.contains(parentElement)) {
      if (parentElement !== storyRef.current && parentElement.tagName.toLowerCase() !== 'div') {
        if (parentElement.parentNode) {
          parentElement.parentNode.replaceChild(newElement, parentElement);
        }
      } else {
        range.deleteContents();
        range.insertNode(newElement);
      }
    }

    // Ensure the selection is within the new element
    const newRange = document.createRange();
    newRange.selectNodeContents(newElement);
    selection.removeAllRanges();
    selection.addRange(newRange);

    setStoryText(storyRef.current.innerHTML);
    setStory(storyRef.current.innerHTML);
  };

  const handlePaste = (event: React.ClipboardEvent<HTMLDivElement>) => {
    event.preventDefault();
    const text = event.clipboardData.getData("text/plain");
    if (storyRef.current) {
      // Insert plain text at cursor position
      const selection = window.getSelection();
      if (selection) {
        const range = selection.getRangeAt(0);
        range.deleteContents();
        range.insertNode(document.createTextNode(text));
        // Move cursor to the end of the inserted text
        range.setStartAfter(range.endContainer);
        selection.removeAllRanges();
        selection.addRange(range);
        setStoryText(storyRef.current.innerHTML);
        setStory(storyRef.current.innerHTML);
      }
    }
  };

  const makeBold = () => applyStyle({ fontWeight: "bold", display: "inline-block" }, "strong");
  const makeItalic = () => applyStyle({ fontStyle: "italic", display: "inline-block" }, "em");
  const makeRegular = () => applyStyle({
    fontStyle: 'normal',
    fontWeight: "normal",
    fontSize: "16px",
    lineHeight: "27px",
    display: "inline-block"
  }, "span"); // Use span for inline block regular text

  const makeH2 = () => applyStyle({
    fontWeight: "bold",
    fontSize: "24px",
    lineHeight: "normal",
    display: "block",
    margin: "16px 0"
  }, "h2");

  const makeH3 = () => applyStyle({
    fontWeight: "bold",
    fontSize: "20px",
    lineHeight: "normal",
    display: "block",
    margin: "16px 0"
  }, "h3");

  const makeH4 = () => applyStyle({
    fontWeight: "bold",
    fontSize: "18px",
    lineHeight: "normal",
    display: "block",
    margin: "16px 0"
  }, "h4");

  const makeH5 = () => applyStyle({
    fontWeight: "bold",
    fontSize: "16px",
    lineHeight: "normal",
    display: "block",
    margin: "16px 0"
  }, "h5");

  return (
    <>
      <div
        spellCheck="false"
        ref={storyRef}
        contentEditable={true}
        onInput={(e) => {
          setStoryText(e.currentTarget.innerHTML);
          setStory(e.currentTarget.innerHTML);
        }}
        onPaste={handlePaste}
        className="bg-transparent outline-none resize-none font-inter leading-[27px] pt-6 w-full text-[16px]"
        style={{ minHeight: "52px", whiteSpace: "pre-wrap" }}
      >
        Start writing here..
      </div>

      <div className="w-max flex gap-2 text-[12px] mt-6 pt-5 mb-[40px] border-[#0000002e] dark:border-[#ffffff2a]">
        <button onClick={makeBold} className="font-bold font-inter border h-6 bg-[#0000003a] px-2 rounded-md border-gray-400 flex items-center justify-center text-[14px]">Bold</button>
        <button onClick={makeItalic} className="italic font-inter border h-6 bg-[#0000003a] px-2 rounded-md border-gray-400 flex items-center justify-center text-[14px]">Italic</button>
        <button onClick={makeRegular} className="font-regular font-inter border h-6 bg-[#0000003a] px-2 rounded-md border-gray-400 flex items-center justify-center text-[14px]">Regular</button>
        <button onClick={makeH2} className="font-bold font-inter border w-6 h-6 bg-[#0000003a] rounded-md border-gray-400 flex items-center justify-center">H2</button>
        <button onClick={makeH3} className="font-bold font-inter border w-6 h-6 bg-[#0000003a] rounded-md border-gray-400 flex items-center justify-center">H3</button>
        <button onClick={makeH4} className="font-bold font-inter border w-6 h-6 bg-[#0000003a] rounded-md border-gray-400 flex items-center justify-center">H4</button>
        <button onClick={makeH5} className="font-bold font-inter border w-6 h-6 bg-[#0000003a] rounded-md border-gray-400 flex items-center justify-center">H5</button>
      </div>
      <button onClick={() => console.log(storyText)} className="hidden"></button>
    </>
  );
}

import { useRef, useEffect, useState } from "react"

interface textareaType {
    identity: string
    textSize: string
    lineSize: string 
    placeholder: string
    border?: boolean
    font: string
    setValue: React.Dispatch<React.SetStateAction<string | undefined>>
}

export default function Textarea({identity, textSize, lineSize, placeholder, border, font, setValue} : textareaType) {
const titleRef = useRef<HTMLTextAreaElement>(null)
  const [titleText, setTitleText] = useState<string>("")

    const autoResize = (ref: React.RefObject<HTMLTextAreaElement>, minHeight: string) => {
        if (ref.current) {
          ref.current.style.height = minHeight
          const scrollHeight = ref.current.scrollHeight
          ref.current.style.height = `${scrollHeight}px`
        }
      }
    
      useEffect(() => autoResize(titleRef, lineSize), [titleText])

  return (
    <textarea
        spellCheck="false"
        onChange={(e) => {setTitleText(e.target.value); setValue(e.target.value)}}
        ref={titleRef}
        value={titleText}
        name={identity}
        className={`${border ? 'border-b border-[#0000002e] dark:border-[#ffffff2a]' : ''} bg-transparent outline-none resize-none w-full font-inter font-${font} ${textSize}`}
        // classNama={`bg-transparent outline-none resize-none font-inter w-full text-[20px]`}
        placeholder={placeholder}
      />
  )
}

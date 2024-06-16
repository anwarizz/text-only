import MaterialForm from "../components/organisms/MaterialForm";
import TextHeader from "../components/organisms/TextHeader";
import TextTable from "../components/organisms/TextTable";
import { PostProvider } from "../contexts/PostContext";

const Write = () => {
  return (
    <PostProvider>
      <TextHeader />
      <TextTable />
      <details>
          <summary className="cursor-pointer underline">Ready to post your text?</summary>
            <div className="mt-5">
              <h2 className="font-bold text-[20px] mb-1">Prepared to reveal your text to the public</h2>
              <p>We need an identity, at least tell me your name, alter ego, personality. or Email?</p>
              <MaterialForm />
          </div>
      </details>
    </PostProvider>
  )
}

export default Write

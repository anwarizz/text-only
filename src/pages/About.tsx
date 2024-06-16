import { Helmet } from "react-helmet"

export default function About() {
  return (
   <>
   <Helmet>
        <meta charSet="utf-8" />
        <title>Only text - About</title>
        <meta name="description" content="A simple open blog writer. Only supports text writing with basic writing features. Tell us everything!"/>
    </Helmet>
    <h2 className='font-extrabold md:text-[36px] text-[30px] leading-[42px] mb-[7px]'>About</h2>
    <p className="text-[19px] mb-4 border-b pb-[24px] border-[#0000002e] dark:border-[#ffffff2a]">F#ck only f*ns. It's just only text.</p>
    <p id="text-content" className="leading-[30px] mb-8">Text only is a simple open blog writer that only supports text writing with basic writing features. This is made for people who want to pour out their hearts, or even tell stories, share life experiences or even tell stories of their imagination openly.    </p>
    <p className="leading-[30px] mb-2">The source code for this project is on GitHub, which is very open and allowed for anyone who wants to use it</p>
   </>
  )
}

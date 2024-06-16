import { useEffect, useState } from "react";
import supabase from "../utils/supabase";
import { useParams } from "react-router-dom";
import formatDate from "../utils/formatDate";

interface Story {
  id: number   
  by: string
  story: string,
  title: string
  description: string
  created_at: string 
  url: string
  email: string
}

export default function Read() {

    const { identity } = useParams()
    const [story, setStory] = useState<Story[]>([])

    const fetchStory = async (email: string | undefined) => {
        const { data, error } = await supabase
          .from('story')
          .select('*')
          .eq('url', email)
      
        if (error) {
           throw new Error(error.message)
          
        }
      
        return data as Story[]
      }

      const getStory = async () => {
        const responses = await fetchStory(identity)
        setStory(responses)
      }    


      useEffect(() => {
        getStory()
      }, [])


  return (
    <article>
        <h2 className='font-extrabold md:text-[36px] text-[30px] leading-[42px] mb-[7px]'>{story[0]?.title}</h2>
        <p className="text-[19px] mb-4 border-b pb-[24px] border-[#00000024] dark:border-[#ffffff2a]">{story[0]?.description}</p>
        <p id="text-content" className="leading-7 inline" dangerouslySetInnerHTML={{__html: story[0]?.story}} />
        <div className="flex flex-col mt-16 text-[19px] font-light">
          <i>{story[0]?.email}</i>
          <i>@{story[0]?.by}</i>
          <i>{formatDate(story[0]?.created_at)}</i>  
        </div>    
    </article>
  )
}

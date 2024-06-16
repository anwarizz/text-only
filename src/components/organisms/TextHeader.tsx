import Textarea from '../atoms/Textarea'
import { PostContext } from '../../contexts/PostContext';
import { useContext } from "react";

export default function TextHeader() {
    const { setTitle, setDescription } = useContext(PostContext)

  return (
    <>
        <Textarea setValue={setTitle} identity="name" textSize="text-[34px]" lineSize="38px" placeholder="Tell us everything.." font="bold"/>
        <Textarea setValue={setDescription} identity="description" textSize="text-[20px]" lineSize="52px" placeholder="Call back.." font="normal" border={true}/>
    </>
  )
}

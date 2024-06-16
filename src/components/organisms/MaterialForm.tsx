// import MaterialInput from '../atoms/MaterialInput';
import MaterialBottom from "../atoms/MaterialBottom";
import { PostContext } from "../../contexts/PostContext";
import { useContext } from "react";
import supabase from "../../utils/supabase";
import { generateUniqKey } from "../../utils/generateUniqKey";

const MaterialForm = () => {
  const {
    setUsername,
    setEmail,
    title,
    description,
    story,
    username,
    email,
  } = useContext(PostContext);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { error } = await supabase
      .from("story")
      .insert({ by: username, url: generateUniqKey(), email, title, description, story });

    if (error) throw new Error(error.message);

    alert("work!!");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 my-4">
      <small>Name</small>
      <input
        onChange={(e) => setUsername(e.target.value)}
        type="text"
        required
      />
      <small>Email {"(Optional)"}</small>
      <input onChange={(e) => setEmail(e.target.value)} type="email" />
      <MaterialBottom type="submit">Post</MaterialBottom>
    </form>
  );
};

export default MaterialForm;

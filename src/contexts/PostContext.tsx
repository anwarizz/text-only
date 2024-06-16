import React, { createContext, useState } from "react"

interface PostContextType {
  title: string | undefined
  description: string | undefined
  story: string | undefined
  username: string | undefined
  email: string | undefined
  setTitle: React.Dispatch<React.SetStateAction<string | undefined>>
  setDescription: React.Dispatch<React.SetStateAction<string | undefined>>
  setStory: React.Dispatch<React.SetStateAction<string | undefined>>
  setUsername: React.Dispatch<React.SetStateAction<string | undefined>>
  setEmail: React.Dispatch<React.SetStateAction<string | undefined>>
}

export const PostContext = createContext<PostContextType>({
  title: undefined,
  description: undefined,
  story: undefined,
  username: undefined,
  email: undefined,
  setTitle: () => {},
  setDescription: () => {},
  setStory: () => {},
  setUsername: () => {},
  setEmail: () => {},
})

export function PostProvider({ children }: { children: React.ReactNode }) {
  const [title, setTitle] = useState<string | undefined>()
  const [description, setDescription] = useState<string | undefined>()
  const [story, setStory] = useState<string | undefined>()
  const [username, setUsername] = useState<string | undefined>()
  const [email, setEmail] = useState<string | undefined>()

  return (
    <PostContext.Provider
      value={{
        title,
        description,
        story,
        username,
        email,
        setTitle,
        setDescription,
        setStory,
        setUsername,
        setEmail,
      }}
    >
      {children}
    </PostContext.Provider>
  )
}

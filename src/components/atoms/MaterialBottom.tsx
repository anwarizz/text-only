export default function MaterialBottom({type, children} : {type: "submit" | "reset" | "button" | undefined, children: React.ReactNode}) {
  return (
    <button type={type} className='bg-[#0000005b] w-max px-3 py-1 rounded-md'>{children}</button>
  )
}

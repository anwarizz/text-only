export default function MaterialInput( {require} : {require: boolean}) {
  return (
    <input type="text" required={require? true : false} className='w-[300px] px-2 py-1'/>
  )
}

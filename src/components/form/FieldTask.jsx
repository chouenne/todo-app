export default function FieldTask({type,placeholder}){
  function handleChange(event){
    console.log(event.target.value)
  }
  return(
    <input
    type={type}
    placeholder={placeholder}
    onChange={handleChange}
    />
  )
}
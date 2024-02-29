export default function SupperButton({buttonTitle}){
  function handleClick(){
    alert({buttonTitle})
  }
  return <button onclick={handleClick}>{buttonTitle}</button>
}
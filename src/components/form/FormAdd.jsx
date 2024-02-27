import FieldTask from "./FieldTask"; 
import SuperButton from "../SuperButton"; 


export default function FormAdd({type,placeholder,buttonValue}){
  return(
<form>
    <FieldTask type={type} placeholder={placeholder}/>
    <SuperButton buttonValue={buttonValue}/>
    </form>
  );
  
}
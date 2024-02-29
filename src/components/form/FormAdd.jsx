import FieldTask from "./FieldTask"; 
import SuperButton from "../SuperButton"; 


export default function FormAdd(){
  return(
<form>
    <FieldTask type={type} placeholder={placeholder}/>
    <SuperButton buttonValue={buttonValue}/>
    </form>
  );
  
}
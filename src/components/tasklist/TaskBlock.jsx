export default function TaskBlock(){
  return(
   <ul>
    {tasks.map((task)=>(
 <li>
{task}
 </li>
    ))}
   
   </ul>
  );
}
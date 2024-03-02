import React, {useState} from 'react';
export default function TaskForm({}){
  const [task, setTask] = useState('');

  const handleSubmit =(e)=>{
    e.preventDefault();
    
  }
  return(
    <input
    type={type}
    placeholder={placeholder}
    onChange={handleChange}
    />
  )
}
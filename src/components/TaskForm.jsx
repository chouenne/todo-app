import React, { useState } from "react";
import '../assets/css/TaskForm.css';


export default function TaskForm({ addTask }) {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() !== '') {
      addTask(task);
      setTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="taskform">
      <label htmlFor="task"></label>
      <input
        type="text"
        id="task"
        value={task}
        placeholder="Enter your new task here"
        onChange={(e) => setTask(e.target.value)}
        className="form-input"
      />
      <button type="submit" id="addbtn">+</button>
    </form>
  );
}

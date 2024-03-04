import React, { useState } from "react";

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
      />
      <button type="submit" id="addbtn">Add</button>
    </form>
  );
}

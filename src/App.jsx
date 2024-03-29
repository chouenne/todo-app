import React, { useState } from "react";
import FilterBar from "./components/FilterBar";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import './assets/css/style.css';

function App() {
  const [filter, setFilter] = useState("all");
  const [tasks, setTasks] = useState([
    { text: "Sample Task", completed: false },
  ]); 

  const addTask = (newTask) => {
    setTasks([...tasks, { text: newTask, completed: false }]);
  };

  const handleToggleComplete = (index) => {
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.map((task, i) => {
        if (i === index) {
          return { ...task, completed: !task.completed };
        }
        return task;
      });
  
      return updatedTasks;
    });
  };
  
  const handleEditTask = (index, editedText) => {
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks];
      updatedTasks[index].text = editedText;
      updatedTasks[index].editedText = ""; // Clear editedText
      return updatedTasks;
    });
    exitEditMode(index); 
  };

  const handleEditedTextChange = (index, value) => {
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks];
      updatedTasks[index].editedText = value;
      return updatedTasks;
    });
  };

  const enterEditMode = (index, text) => {
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks];
      updatedTasks[index].editMode = true;
      updatedTasks[index].editedText = text;
      return updatedTasks;
    });
  };

  const exitEditMode = (index) => {
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks];
      updatedTasks[index].editMode = false;
      updatedTasks[index].editedText = "";
      return updatedTasks;
    });
  };

  const handleDeleteTask = (index) => {
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks];
      updatedTasks.splice(index, 1);
      return updatedTasks;
    });
  };

  return (
    <div className="app">
      <div>
        <div className="header-flex"> <h1>Organize your work</h1>
      <FilterBar filter={filter} setFilter={setFilter} /></div>
     
      <TaskForm addTask={addTask} />
      <TaskList
        tasks={tasks}
        filter={filter}
        enterEditMode={enterEditMode}
        exitEditMode={exitEditMode}
        handleToggleComplete={handleToggleComplete}
        handleEditTask={handleEditTask}
        handleDeleteTask={handleDeleteTask}
        handleEditedTextChange={handleEditedTextChange}
      />
      </div> 
    </div>
  );
}

export default App;

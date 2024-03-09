import '../assets/css/TaskList.css';
const TaskList = ({
  tasks,
  filter,
  handleToggleComplete,
  handleEditTask,
  enterEditMode,
  exitEditMode,
  handleDeleteTask,
  handleEditedTextChange,
}) => {
  const filteredTasks = tasks.filter((task) => {
    if (filter === "all") {
      return true;
    } else if (filter === "active") {
      return !task.completed;
    } else if (filter === "completed") {
      return task.completed;
    }
    return true;
  });

  return (
    <section className="tasklist">
      <ul>
        {filteredTasks.map((task, index) => (
          <li key={index} className={task.completed ? "completed" : ""}>
            <input 
              type="checkbox"
              checked={task.completed}
              onChange={() => {
                console.log("Checkbox changed for task at index:", index);
                handleToggleComplete(index);
              }}
              className="checkbox"
            />

            {task.editMode ? (
              <>
                <input 
                  type="text"
                  value={task.editedText || ""}
                  onChange={(e) =>
                    handleEditedTextChange(index, e.target.value)
                  }
                  className="textInput"
                />
              <div className="btngroup">
              <button className="updatebtn" onClick={() => handleEditTask(index, task.editedText)}>
                  Save
                </button>
                <button className="cancelbtn" onClick={() => exitEditMode(index)}>Cancel</button>
              </div>
              </>

            ) : (
              <>
                {task.text}
                <div className="btngroup">
                <button className="editbtn" onClick={() => enterEditMode(index, task.text)}>
                  Edit
                </button>
                <button className="deletebtn" onClick={() => handleDeleteTask(index)}>Delete</button>
                </div>
                
              </>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TaskList;

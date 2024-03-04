import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
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
            />

            {task.editMode ? (
              <div>
                <input 
                  type="text"
                  value={task.editedText || ""}
                  onChange={(e) =>
                    handleEditedTextChange(index, e.target.value)
                  }
                />
              <div className="btngroup">
              <button className="updatebtn" onClick={() => handleEditTask(index, task.editedText)}>
                  Update
                </button>
                <button className="cancelbtn" onClick={() => exitEditMode(index)}>Cancel</button>
              </div>
              </div>

            ) : (
              <>
                {task.text}
                <div className="btngroup">
                <button className="editbtn" onClick={() => enterEditMode(index, task.text)}>
                  Edit
                </button>
                <button className="deletebtn" onClick={() => handleDeleteTask(index)}>X</button>
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

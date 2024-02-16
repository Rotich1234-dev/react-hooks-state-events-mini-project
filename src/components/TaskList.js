import React from "react";
import Task from "./Task";

function TaskList({ tasks }) {
  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id} className="task">
          <Task
            text={task.text}
            category={task.category}
            onDelete={() => {
              // Implement the logic for deleting the task (not provided in the test)
              console.log(`Deleting task: ${task.text}`);
            }}
          />
        </div>
      ))}
    </div>
  );
}

export default TaskList;

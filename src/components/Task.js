import React from "react";

function Task({ text, category, onDelete }) {
  const handleDelete = () => {
    onDelete(); // Call onDelete without any arguments
  };

  return (
    <div>
      <p>{text}</p>
      <p>{category}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default Task;

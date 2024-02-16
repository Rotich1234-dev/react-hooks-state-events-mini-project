import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [taskDetails, setTaskDetails] = useState({
    text: "",
    category: categories[0], // Set the default category
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTaskDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onTaskFormSubmit(taskDetails);
    setTaskDetails({
      text: "",
      category: categories[0], // Reset to the default category after submission
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Details:
        <input
          type="text"
          name="text"
          value={taskDetails.text}
          onChange={handleChange}
          aria-label="Details"
        />
      </label>
      <label>
        Category:
        <select
          name="category"
          value={taskDetails.category}
          onChange={handleChange}
          aria-label="Category"
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
      <button type="submit">Add task</button>
    </form>
  );
}

export default NewTaskForm;

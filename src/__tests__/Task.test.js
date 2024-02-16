import "@testing-library/jest-dom";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "../components/App";

test("displays the task text", () => {
  render(<App />);
  const taskTextElement = screen.getByText(/Buy rice/);
  expect(taskTextElement).toBeInTheDocument();
});

test("displays the task category", () => {
  render(<App />);
  const taskCategoryElement = screen.getByText(/Groceries/);
  expect(taskCategoryElement).toBeInTheDocument();
});

test("is removed from the list when the delete button is clicked", async () => {
  render(<App />);
  
  // Wait for the component to finish rendering
  const task = screen.getByText(/Buy rice/);
  const deleteButton = task.parentElement.querySelector("button");

  fireEvent.click(deleteButton);

  // Wait for the component to update after the click event
  await waitFor(() => {
    expect(screen.queryByText(/Buy rice/)).not.toBeInTheDocument();
  });
});

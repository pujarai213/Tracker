import React, { useState } from "react";

const TaskForm = ({ onAddTask }) => {
  let [tasks, setTasks] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!tasks.trim()) return;
    

    onAddTask(tasks);
    setTasks("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="tasks">Task: </label>
        <input
          type="text"
          id="tasks"
          value={tasks}
          onChange={(e) => {
            setTasks(e.target.value);
          }}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default TaskForm;

import { useState } from "react";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

const Home = () => {
  let [tasks, setTasks] = useState([]);

  const addTask = (taskText) => {
    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };
    setTasks((prev) => [...prev, newTask]);
  };

  const toggleTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((tasks) =>
        tasks.id === id ? { ...tasks, completed: !tasks.completed } : tasks
      )
    );
  };

  const deleteTask = (id) => {
    setTasks((prevTasks) => 
        prevTasks.filter((task) => task.id !== id)
    );
  };

  return (
    <>
      <TaskForm onAddTask={addTask} />
      <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask}/>
    </>
  );
};

export default Home;

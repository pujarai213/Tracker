import TaskItem from "./TaskItem";

const TaskList = ({ tasks, onToggle }) => {
  return (
    <ul>
      {tasks.map((task) => (
        // <li key={task.id}>{task.text}</li>
        <TaskItem key={task.id} task={task} onToggle={onToggle} />
      ))}
    </ul>
  );
};

export default TaskList;

const TaskItem = ({ task, onToggle }) => {
  console.log(task);
  console.log("onToggle:", onToggle);

  return (
    <li style={{ opacity: task.completed ? 0.6 : 1 }}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />
      <span
        style={{
          textDecoration: task.completed ? "line-through" : "none",
        }}
      >
        {task.text}
      </span>
    </li>
  );
};

export default TaskItem;

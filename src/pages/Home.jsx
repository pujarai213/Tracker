import React, { useState } from 'react'
import TaskForm from '../components/TaskForm'
import TaskList from '../components/TaskList'

const Home = () => {
    let [tasks, setTasks] = useState([])

    const addTask = (taskText) => {
        const newTask = {
            id: Date.now(),
            text: taskText,
            completed: false
        }
        setTasks((prev)=>[...prev, newTask])
    }
  return (
    <>
      <TaskForm onAddTask={addTask} />
      <TaskList tasks={tasks}/>
    </>
  )
}

export default Home

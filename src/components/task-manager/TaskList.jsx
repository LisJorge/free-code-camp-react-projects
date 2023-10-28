import Task from './Task';
import TaskForm from './TaskForm';
import React, { useState } from 'react';

function TaskList() {
  const [tasks, setTasks] = useState([]);
  
  const addTask = (task) => {
    if(task.text.trim()) {
      const updatedTasks = [task, ...tasks];
      setTasks(updatedTasks);
    }
  }

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => (task.id !== id))
    setTasks(updatedTasks);
  }

  const completeTask = (id) => {
    const updatedTasks = tasks.map((task) => {
      if(task.id === id){
        task.isDone = !task.isDone;
      }
      return task;
    });
    console.log(updatedTasks)
    setTasks(updatedTasks);
  };
  
  return (
    <>
      <TaskForm onSubmit={addTask} />
      <div>
        {tasks.map((task) => 
        <Task
          key={task.id}
          id={task.id}
          text={task.text}
          isDone={task.isDone}
          completeTask={completeTask}
          deleteTask={deleteTask}
        />)}        
      </div>
    </>
  );
}

export default TaskList;
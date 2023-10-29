import Task from './Task';
import TaskForm from './TaskForm';
import { useState } from 'react';
import { TaskDto } from './dtos/Task.dto';

function TaskList() {
  const [tasks, setTasks] = useState([]);
  
  const addTask = (task: TaskDto) => {
    if(task.text.trim()) {
      const updatedTasks = [task, ...tasks];
      setTasks(updatedTasks);
    }
  }

  const deleteTask = (id: string) => {
    const updatedTasks = tasks.filter((task) => (task.id !== id))
    setTasks(updatedTasks);
  }

  const completeTask = (id: string) => {
    const updatedTasks = tasks.map((task) => {
      if(task.id === id){
        task.isDone = !task.isDone;
      }
      return task;
    });
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
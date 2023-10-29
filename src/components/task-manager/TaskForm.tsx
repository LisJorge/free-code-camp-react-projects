import '../../styles/task-manager/TaskForm.css'
import { useState } from 'react';
import { v4 as uuidV4 }  from 'uuid';
import { TaskDto } from './dtos/Task.dto';

function TaskForm(props) {
  const [newTextInput, setNewTextInput] = useState('')

  const manageTextInput = e => {
    setNewTextInput(e.target.value);
  }

  const manageSubmit = e => {
    e.preventDefault(); //Avoid to reload page when form is submitted
    const newTask: TaskDto = {
      id: uuidV4(),
      text: newTextInput,
      isDone: false,
    }
    props.onSubmit(newTask);
  };
  
  return (
    <form 
      className='task-form'
      onSubmit={manageSubmit}
      >
      <input
        className='task-text-input'
        type='text'
        placeholder='Write a new task'
        name='task-text'
        onChange={manageTextInput}
      />
      <button 
        className='task-submit'
        type='submit'
      >
        Add task
      </button>
    </form>);
}

export default TaskForm;
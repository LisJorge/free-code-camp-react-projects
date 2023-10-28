import '../../styles/task-manager/Task.css';
import { AiOutlineCloseCircle } from 'react-icons/ai'

function Task({ id, text, isDone, completeTask, deleteTask }) {
  return (
    <div
      id={id}
      className={`task-container${isDone ? ' task-done' : ''}`}
    >
      <div
        className='task-text'
        onClick={() => completeTask(id)}>
        {text}
      </div>
      <div className='task-icon-container'>
        <AiOutlineCloseCircle
          className='task-icon'
          onClick={() => deleteTask(id)}
        />
      </div>
    </div>
  )
}

export default Task;

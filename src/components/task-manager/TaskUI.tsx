import '../../styles/task-manager/TaskUI.css';
import TaskList from './TaskList';

function TaskUI() {
  return (
    <div className='task-app'>
      <div className='task-list'>
        <h1>My tasks</h1>
        <TaskList />
      </div>
    </div>
  );
}

export default TaskUI;

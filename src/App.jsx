import { Route, Routes } from 'react-router-dom';
import './App.css';
import Calculator from './components/calculator/Calculator';
import CounterUI from './components/counter/CounterInterface';
import TaskUI from './components/task-manager/TaskUI';

function App() {
  return (
    <div className='App'>
      <header>
        <a href='/'>React projects</a>
      </header>
      <Routes>
        <Route path='/'></Route>
        <Route path='/calculator' element={<Calculator />} />
        <Route path='/counter' element={<CounterUI />} />
        <Route path='/task-app' element={<TaskUI />} />
      </Routes>
      <nav>
        <ul>
          <li>
            <a href='/'>Calculator</a>
          </li>
          <li>
            <a href='/'>Counter</a>
          </li>
          <li>
            <a href='/'>Task Manager</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default App;

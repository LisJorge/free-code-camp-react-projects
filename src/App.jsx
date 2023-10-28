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
            <a href='/calculator'>Calculator</a>
          </li>
          <li>
            <a href='/counter'>Counter</a>
          </li>
          <li>
            <a href='/task-app'>Task Manager</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default App;

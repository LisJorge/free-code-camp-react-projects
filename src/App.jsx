import { Route, Routes } from 'react-router-dom';
import './App.css';
import Calculator from './components/calculator/Calculator';

function App() {
  return (
    <div className='App'>
      <header>
        <a href='/'>React projects</a>
      </header>
      <Routes>
        <Route path ='/'></Route>
        <Route path ='/calculator' element={<Calculator/>} />
        <Route path ='/counter'/>
        <Route path ='/task-app'/>
      </Routes>
    </div>
  );
}

export default App;

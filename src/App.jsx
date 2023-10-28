import { Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path ='/'></Route>
        <Route path ='/calculator'></Route>
        <Route path ='/counter'></Route>
        <Route path ='/task-app'></Route>
      </Routes>
    </div>
  );
}

export default App;

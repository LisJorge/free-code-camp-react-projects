import '../../styles/counter/CounterUI.css';
import Button from './Button';
import Counter from './Counter';
import { useState } from 'react';

function CounterUI() {
  const [numClicks, setClicks] =  useState(0);
  const clickAction = () => {
    setClicks(numClicks + 1)    
  };
  const resetAction = () => {
    setClicks(0);
  }
  
  return (
    <div className="CounterUI">
      <div className='logo-container'>
        <img className='logo-image' src={require('../../static/dummy-img.jpg')} alt='logo-counter'/>
      </div>
      <div className='main-container'>
        <Counter clicks={numClicks}/>
        <Button
          text='Click'
          isClickButton={true}
          clickAction={clickAction}
        />
        <Button
          text='Reset'
          isClickButton={false}
          clickAction={resetAction}
        />
      </div>      
    </div>
  );
}

export default CounterUI;

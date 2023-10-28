import '../../styles/calculator/Calculator.css';
import Button from './Button';
import Screen from './Screen';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function Calculator() {
  const [input, setInput] = useState('');

  const addInput = (newInput) => (setInput(input + newInput));
  const clearInput = () => (setInput(''));
  const getResult = () => {
    if(input){
      try{
        const result = evaluate(input);
        setInput(result);
      } catch {
        alert('Input not valid')
      }
    }
    alert('Provide an input')
  };

  return (
    <div className='calculator'>
      <div className='calculator-container'>
        <Screen result={input} />
        <div className='control-row'>
          <Button clickAction={addInput} >1</Button>
          <Button clickAction={addInput} >2</Button>
          <Button clickAction={addInput} >3</Button>
          <Button clickAction={addInput} >+</Button>
        </div>
        <div className='control-row'>
          <Button clickAction={addInput} >4</Button>
          <Button clickAction={addInput} >5</Button>
          <Button clickAction={addInput} >6</Button>
          <Button clickAction={addInput} >-</Button>
        </div>
        <div className='control-row'>
          <Button clickAction={addInput} >7</Button>
          <Button clickAction={addInput} >8</Button>
          <Button clickAction={addInput} >9</Button>
          <Button clickAction={addInput} >*</Button>
        </div>
        <div className='control-row'>
          <Button clickAction={getResult} >=</Button>
          <Button clickAction={addInput} >0</Button>
          <Button clickAction={addInput} >.</Button>
          <Button clickAction={addInput} >/</Button>
        </div>
        <div className='clear' onClick={()=>clearInput()}>Clear</div>
      </div>
    </div>
  );
}

export default Calculator;

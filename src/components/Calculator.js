import React, { useState } from 'react';
import '../components/App.css';
import calculate from '../logic/calculate';

const CalculatorContainer = () => {
  const [totalSum, setTotalSum] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const clickHandler = (e) => {
    setTotalSum(calculate(totalSum, e.target.textContent));
  };

  return (
    <>
      <div className="App">
        <h2 className='firstTitle'> Let&apos;s do some math! </h2>
        <div className='container'>
          <div className='display' id='display'>
            {totalSum.total} {totalSum.operation} {totalSum.next}
          </div>
          <div className="keypad">
            <button onClick={clickHandler} id="clear">AC</button>
            <button name="+/-" onClick={clickHandler}>+/-</button>
            <button name="%" onClick={clickHandler}>%</button>
            <button className="highlight" name="÷" onClick={clickHandler}>÷</button>
            <button name="7" onClick={clickHandler}>7</button>
            <button name="8" onClick={clickHandler}>8</button>
            <button name="9" onClick={clickHandler}>9</button>
            <button className="highlight" name="*" onClick={clickHandler}>x</button>
            <button name="4" onClick={clickHandler}>4</button>
            <button name="5" onClick={clickHandler}>5</button>
            <button name="6" onClick={clickHandler}>6</button>
            <button className="highlight" name="-" onClick={clickHandler}>-</button>
            <button name="1" onClick={clickHandler}>1</button>
            <button name="2" onClick={clickHandler}>2</button>
            <button name="3" onClick={clickHandler}>3</button>
            <button className="highlight" name="+" onClick={clickHandler}>+</button>
            <button className="calcZero" name="0" onClick={clickHandler}>0</button>
            <button name="." onClick={clickHandler}>.</button>
            <button className="highlight" name="=" onClick={clickHandler}>=</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default CalculatorContainer;
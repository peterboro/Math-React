import React from 'react';
import '../components/App.css';
import calculate from '../logic/calculate';


class CalculatorContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };

    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(e) {
    this.setState((state) => calculate(state, e.target.textContent));
  }

  render() {
    const {total, operation, next} = this.state;
    return (
      <>
        <div className="container">
          <div className='display' id='display'>
            {total} {operation} {next}
          </div>
          <div className="keypad">
            <button onClick={this.clickHandler} id="clear">AC</button>
            <button name="+/-" onClick={this.clickHandler}>+/-</button>
            <button name="%" onClick={this.clickHandler}>%</button>
            <button className="highlight" name="÷" onClick={this.clickHandler}>÷</button>
            <button name="7" onClick={this.clickHandler}>7</button>
            <button name="8" onClick={this.clickHandler}>8</button>
            <button name="9" onClick={this.clickHandler}>9</button>
            <button className="highlight" name="*" onClick={this.clickHandler}>x</button>
            <button name="4" onClick={this.clickHandler}>4</button>
            <button name="5" onClick={this.clickHandler}>5</button>
            <button name="6" onClick={this.clickHandler}>6</button>
            <button className="highlight" name="-" onClick={this.clickHandler}>-</button>
            <button name="1" onClick={this.clickHandler}>1</button>
            <button name="2" onClick={this.clickHandler}>2</button>
            <button name="3" onClick={this.clickHandler}>3</button>
            <button className="highlight" name="+" onClick={this.clickHandler}>+</button>
            <button className="calcZero" name="0" onClick={this.clickHandler}>0</button>
            <button name="." onClick={this.clickHandler}>.</button>
            <button className="highlight" name="=" onClick={this.clickHandler}>=</button>
          </div>
        </div>
      </> 
    )
  }
}
export default CalculatorContainer;
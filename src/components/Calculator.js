import React from 'react';
import '../components/App.css';
class CalculatorContainer extends React.Component {
  render() {
    return (
      <>
        <div className="container">
          <input type="text" className="display" id="display" value={0} />
          <div className="keypad">
            <button id="clear">AC</button>
            <button name="+/-">+/-</button>
            <button name="%">%</button>
            <button className="highlight" name="/">&divide;</button>
            <button name="7">7</button>
            <button name="8">8</button>
            <button name="9">9</button>
            <button className="highlight" name="*">&times;</button>
            <button name="4">4</button>
            <button name="5">5</button>
            <button name="6">6</button>
            <button className="highlight" name="-">&ndash;</button>
            <button name="1">1</button>
            <button name="2">2</button>
            <button name="3">3</button>
            <button className="highlight" name="+">+</button>
            <button className="calcZero" name="0">0</button>
            <button name=".">.</button>
            <button className="highlight" name="=">=</button>
          </div>
        </div>
      </> 
    )
  }
}
export default CalculatorContainer;
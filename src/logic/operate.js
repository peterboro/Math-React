import Big from 'big.js';

export default function operate(numberOne, numberTwo, operation) {
  const bigOne = Big(numberOne);
  const bigTwo = Big(numberTwo);
  if (operation === '+') {
    return bigOne.plus(bigTwo).toString();
  }
  if (operation === '-') {
    return bigOne.minus(bigTwo).toString();
  }
  if (operation === 'x') {
    return bigOne.times(bigTwo).toString();
  }
  if (operation === '÷') {
    try {
      return bigOne.div(bigTwo).toString();
    } catch (err) {
      return "Cannot divide by 0";
    }
  }
  if (operation === '%') {
    try {
      return bigOne.mod(bigTwo).toString();
    } catch (err) {
      return "0";
    }
  }
  throw Error(`Unknown operation '${operation}'`);
}
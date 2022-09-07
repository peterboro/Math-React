import operate from "./operate";

const calculate = (calculator = {}, buttonName) => {
  let { total, next, operation } = calculator;
  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const operands = ['÷', 'x', '+', '-', '%'];

  if (buttonName === "AC") {
    return {
      ...calculator,
      total: null,
      next: null,
      operation: null,
    };
  }

  if (buttonName === "+/-") {
    return {
      ...calculator,
      total: total * -1,
      next: next * -1,
    };
  }

  if (buttonName === ".") {
    if (!next.includes(".")) {
      next += buttonName;
    }
  }

  if (numbers.includes(buttonName)) {
    while (next === null) {
      next = "";
    }
    next += buttonName;
  }

  if (operands.includes(buttonName)) {
    while (next !== null && operation !== null) {
      total = operate(total, next, operation);
      operation = buttonName;
      next = null;
      operation = null;
    }
    while (next !== null) {
      total = next;
      next = null;
    }
    if (next == null || operation == null) {
      operation = buttonName;
    }
  }

  if (buttonName === "=") {
    if (total && !next) {
      const result = total;
      total = result;
    }
    if (!total && !next) {
      total = "0";
    }
    if (total && next && operation) {
      total = operate(total, next, operation);
      next = null;
      operation = null;
    }
  }

  return { total, operation, next};
};

export default calculate;

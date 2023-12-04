// /*
//   Implement a class `Calculator` having below methods
//     - initialise a result variable in the constructor and keep updating it after every arithmetic operation
//     - add: takes a number and adds it to the result
//     - subtract: takes a number and subtracts it from the result
//     - multiply: takes a number and multiply it to the result
//     - divide: takes a number and divide it to the result
//     - clear: makes the `result` variable to 0
//     - getResult: returns the value of `result` variable
//     - calculate: takes a string expression which can take multi-arithmetic operations and give its result
//       example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
//       Points to Note:
//         1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
//         2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

//   Once you've implemented the logic, test your code by running
// */

class Calculator {
  constructor() {
    this.result = 0;
  }

  add(number) {
    this.result += number;
  }

  subtract(number) {
    this.result -= number;
  }

  multiply(number) {
    this.result *= number;
  }

  divide(number) {
    if (number === 0) {
      throw new Error("Cannot divide by zero");
    }
    this.result /= number;
  }

  clear() {
    this.result = 0;
  }

  getResult() {
    return this.result;
  }

  calculate(expression) {
    operator = ["*", "+", "-", "/", "("];
    if (operator.includes(exp[i])) {
      stack.push(curr);
      stack.push(exp[i]);
      curr = "";
    }

    let number = expression.split(/[+\/*-]/);
    console.log("number : ", number);
    this.result = eval(expression);

    // const value = expression.split(" ");

    // for (let i = 0; i < value.length; i += 2) {
    //   const number = parseFloat(value[i]);
    //   if (isNaN(number)) {
    //     throw new Error("Invalid input");
    //   }

    //   if (i === 0) {
    //     this.result = number;
    //   } else {
    //     const operator = value[i - 1];
    //     this.performCalculation(operator, number);
    //   }
    // }
  }

  performCalculation(operator, number) {
    switch (operator) {
      case "+":
        this.add(number);
        break;
      case "-":
        this.subtract(number);
        break;
      case "*":
        this.multiply(number);
        break;
      case "/":
        this.divide(number);
        break;
      case "(":
      case ")":
        break;
      default:
        throw new Error("Invalid operator");
    }
  }
}
const calculator = new Calculator();

function test(exp) {
  let stack = [];
  exp = exp.replaceAll(" ", "");
  console.log(exp);
  operator = ["*", "+", "-", "/", "("];

  let curr = "";
  for (let i = 0; i < exp.length; i++) {
    if (operator.includes(exp[i])) {
      stack.push(curr);
      stack.push(exp[i]);
      curr = "";
    } else if (exp[i] == ")") {
      let perform = "";
      let check = true;
      stack.push(curr);
      curr = "";
      let j = stack.length - 1;
      while (check) {
        if (stack[j] == "(") {
          calculator.calculate(perform.split("").reverse().join(""));
          const answer = calculator.getResult();
          console.log(answer);
          calculator.clear();
          console.log("perform : ", perform.split("").reverse().join(""));
          stack.pop();
          stack.push(answer);
          check = false;
        } else {
          var popped = stack.pop();
          j--;
          perform += popped;
        }
      }
    } else {
      curr += exp[i];
    }
  }
}

test("(9 + 2 * (6 - (4 + 1) / 2) + 7)");

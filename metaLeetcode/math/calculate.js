// Leetcode: 227. Basic Calculator II
// https://leetcode.com/problems/basic-calculator-ii/
// Difficulty: Medium

// Given a string s which represents an expression, evaluate this expression and return its value.
// The integer division should truncate toward zero.
// You may assume that the given expression is always valid. All intermediate results will be in the range of [-231, 231 - 1].
// Note: You are not allowed to use any built-in function which evaluates strings as mathematical expressions, such as eval().

/**
 * @param {string} s
 * @return {number}
 */

// my version of an official solution:
var calculate = function (s) {
  let num = "";
  let operator = "+";
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    let currentChar = s[i];
    if (!isNaN(currentChar)) {
      num += currentChar;
    }
    if (isNaN(currentChar) || i === s.length - 1) {
      if (operator === "+") {
        stack.push(+num);
      }
      if (operator === "-") {
        stack.push(-num);
      }
      if (operator === "*") {
        let product = stack.pop() * num;
        stack.push(product);
      }
      if (operator === "/") {
        let result = Math.trunc(stack.pop() / num);
        stack.push(result);
      }
      num = "";
      operator = currentChar;
    }
  }

  return stack.reduce((acc, item) => acc + item, 0);
};

// original official solution:
var calculate1 = function (s) {
  let num = "";
  let preOperator = "+";
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (!isNaN(s[i])) num += s[i];

    if (isNaN(s[i]) || i === s.length - 1) {
      if (preOperator === "+") stack.push(+num);
      if (preOperator === "-") stack.push(-num);
      if (preOperator === "*") stack.push(stack.pop() * num);
      if (preOperator === "/") stack.push(Math.trunc(stack.pop() / num));

      preOperator = s[i];
      num = "";
    }
  }

  return stack.reduce((total, cur) => total + cur, 0);
};

exampleS = "3+2*2";
console.log(calculate(exampleS)); // 7

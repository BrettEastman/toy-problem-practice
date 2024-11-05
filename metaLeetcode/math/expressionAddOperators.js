/**
 * Leetcode: 282. Expression Add Operators
 * URL: https://leetcode.com/problems/expression-add-operators/
 * Hard
 *
 * Given a string num that contains only digits and an integer target, return all possibilities
 * to insert the binary operators '+', '-', and/or '*' between the digits of num so that
 * the resultant expression evaluates to the target value.
 *
 * Note that operands in the returned expressions should not contain leading zeros.
 *
 * Example 1:
 * Input: num = "123", target = 6
 * Output: ["1*2*3","1+2+3"]
 *
 * Example 2:
 * Input: num = "232", target = 8
 * Output: ["2*3+2","2+3*2"]
 *
 * Example 3:
 * Input: num = "3456237490", target = 9191
 * Output: []
 */

/**
 * @param {string} num - The string containing only digits.
 * @param {number} target - The target value to achieve with the expression.
 * @return {string[]} - All valid expressions that evaluate to the target.
 */
var addOperators = function (num, target) {
  const result = []; // Array to store all valid expressions that match the target.

  /**
   * Helper function to perform backtracking.
   *
   * @param {number} index - Current position in the num string.
   * @param {number} prevNum - The value of the previous operand, used to handle multiplication.
   * @param {number} currNum - The cumulative value of the expression so far.
   * @param {string} expr - The current expression being built.
   */
  function backtrack(index, prevNum, currNum, expr) {
    // Base Case: If we've reached the end of the string, check if the current expression evaluates to target.
    if (index === num.length) {
      if (currNum === target) {
        result.push(expr); // If valid, add the expression to the result array.
      }
      return; // Backtrack as there's nothing more to process.
    }

    // Iterate through the string, taking one digit at a time to form operands.
    for (let i = index + 1; i <= num.length; i++) {
      const currStr = num.slice(index, i); // Extract the current substring as the operand.
      const currInt = parseInt(currStr, 10); // Convert the substring to an integer.

      // Skip operands with leading zeros to prevent invalid expressions like "05".
      if (i > index + 1 && num[index] === "0") {
        continue;
      }

      if (index === 0) {
        // First operand: start the expression without any operator.
        // Initialize prevNum and currNum with the first operand's value.
        backtrack(i, currInt, currInt, currStr);
      } else {
        // Recursive Case 1: Addition ('+')
        backtrack(
          i,
          currInt, // Update prevNum to the current operand for future operations.
          currNum + currInt, // Update the cumulative value by adding the current operand.
          expr + "+" + currStr // Append '+operand' to the expression.
        );

        // Recursive Case 2: Subtraction ('-')
        backtrack(
          i,
          -currInt, // Update prevNum to negative to handle subtraction in future operations.
          currNum - currInt, // Update the cumulative value by subtracting the current operand.
          expr + "-" + currStr // Append '-operand' to the expression.
        );

        // Recursive Case 3: Multiplication ('*')
        backtrack(
          i,
          prevNum * currInt, // Update prevNum to the result of multiplication.
          currNum - prevNum + prevNum * currInt, // Adjust the cumulative value by removing the last operand and adding the multiplied result.
          expr + "*" + currStr // Append '*operand' to the expression.
        );
      }
    }
  }

  // Initiate the backtracking process starting from index 0 with initial values.
  backtrack(0, 0, 0, "");

  return result; // Return all valid expressions that evaluate to the target.
};

// Example usage:
let num = "123",
  target = 6;
console.log(addOperators(num, target)); // Output: ["1*2*3","1+2+3"]

// Additional Test Cases:
console.log(addOperators("232", 8)); // Output: ["2*3+2","2+3*2"]
console.log(addOperators("105", 5)); // Output: ["1*0+5","10-5"]
console.log(addOperators("00", 0)); // Output: ["0+0", "0-0", "0*0"]
console.log(addOperators("3456237490", 9191)); // Output: []

// Time Complexity: O(4^N) - In the worst case, we have 4 choices for each digit in the string.
// Space Complexity: O(N) - The recursive stack can go as deep as the length of the input string.

// my solution based on above:
/**
 * @param {string} num
 * @param {number} target
 * @return {string[]}
 */
var addOperators = function (num, target) {
  const result = [];

  // helper function to perform backtracking
  function dfs(index, prevNum, cumulativeVal, expr) {
    // Base Case: If we've reached the end of the string, check if the current expression evaluates to target.
    if (index === num.length) {
      // If valid, add the expression to the result array. Then return
      if (cumulativeVal === target) {
        result.push(expr);
      }
      return;
    }

    // Iterate through the string, taking one digit at a time to form operands.
    for (let i = index + 1; i <= num.length; i++) {
      // Extract the current substring as the operand.
      let currString = num.slice(index, i);
      // convert the substring into an integer
      let currInt = parseInt(currString);

      // skip operands with leading zeros
      if (i > index + 1 && num[index] === "0") {
        continue;
      }

      // First operand: start the expression without any operator.
      if (index === 0) {
        dfs(i, currInt, currInt, currString);
      } else {
        dfs(i, currInt, cumulativeVal + currInt, expr + "+" + currString);
        dfs(i, -currInt, cumulativeVal - currInt, expr + "-" + currString);
        dfs(
          i,
          prevNum * currInt,
          cumulativeVal - prevNum + prevNum * currInt,
          expr + "*" + currString
        );
      }
    }
  }

  // initiate the first function call with (0,0,0,'')
  dfs(0, 0, 0, "");

  return result;
};

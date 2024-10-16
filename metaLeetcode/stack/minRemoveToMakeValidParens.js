// Leetcode: 1249. Minimum Remove to Make Valid Parentheses
// https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/
// Easy
// Given a string s of '(' , ')' and lowercase English characters.
// Your task is to remove the minimum number of parentheses ( '(' or ')', in any positions ) so that the resulting parentheses string is valid and return any valid string.
// Formally, a parentheses string is valid if and only if:
// It is the empty string, contains only lowercase characters, or
// It can be written as AB (A concatenated with B), where A and B are valid strings, or
// It can be written as (A), where A is a valid string.

/**
 * @param {string} s
 * @return {string}
 */

// my solution
var minRemoveToMakeValid = function (s) {
  let result = "";
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    let currentChar = s[i];
    if (currentChar === ")") {
      if (stack[stack.length - 1] === "(") {
        stack.pop();
        result += ")";
      } else {
        continue;
      }
    } else if (currentChar === "(") {
      stack.push("(");
      result += "(";
    } else {
      result += currentChar;
    }
  }

  // if the stack still has length
  if (stack.length) {
    let resultArr = result.split("");
    console.log("resultArr:", resultArr);
    while (stack.length) {
      stack.pop();
      let index = resultArr.lastIndexOf("(");
      resultArr.splice(index, 1);
    }
    return resultArr.join("");
  } else {
    return result;
  }
};

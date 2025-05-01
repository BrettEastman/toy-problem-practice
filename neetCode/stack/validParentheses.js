// LeetCode 20. Valid Parentheses
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

/**
 * @param {string} s
 * @return {boolean}
 */
// correct solution
var isValid1 = function (s) {
  const stack = [];
  const brackets = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  for (let i = 0; i < s.length; i++) {
    if (s[i] in brackets) {
      stack.push(s[i]);
    } else if (brackets[stack.pop()] !== s[i]) {
      return false;
    }
  }
  return stack.length === 0;
};

// My first solution, which didn't pass the test for "(])". I also for got the the string is JUST bracket characters only.
var isValid = function (s) {
  const stack = [];
  const bracketPairs = { ")": "(", "]": "[", "}": "{" };
  const startBrackets = Object.values(bracketPairs);
  const endBrackets = Object.keys(bracketPairs);

  if (s.length < 2 || endBrackets.includes(s[0])) return false;

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (startBrackets.includes(char)) {
      stack.push(char);
    } else if (bracketPairs[char] === stack[stack.length - 1]) {
      stack.pop();
    }
  }
  return stack.length === 0;
};

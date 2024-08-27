// Given a string containing  three types of brackets, determine if it's balanced. Return YES if it is, NO if it isn't.
function isBalanced(s) {
  let stack = [];
  let openCloseBrackets = { ")": "(", "}": "{", "]": "[" };
  let splitStringArr = s.split("");
  let openBrackets = Object.values(openCloseBrackets);

  for (let char of splitStringArr) {
    if (openBrackets.includes(char)) {
      stack.push(char);
    } else if (stack[stack.length - 1] === openCloseBrackets[char]) {
      stack.pop();
    } else {
      return "NO";
    }
  }

  if (stack.length === 0) {
    return "YES";
  } else {
    return "NO";
  }
}

let string1 = "()()[{()})]";

console.log(isBalanced(string1));

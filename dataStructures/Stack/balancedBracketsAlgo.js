// my solution 8/27/24
function balancedBrackets(string) {
  const openBrackets = ["(", "[", "{"];
  const closeBrackets = [")", "]", "}"];
  const openCloseBrackets = { ")": "(", "]": "[", "}": "{" };
  let stack = [];

  for (let i = 0; i < string.length; i++) {
    let currentChar = string[i];
    if (openBrackets.includes(currentChar)) {
      stack.push(currentChar);
    } else if (stack[stack.length - 1] === openCloseBrackets[currentChar]) {
      stack.pop();
    } else if (closeBrackets.includes(currentChar)) {
      return false;
    } else {
      continue;
    }
  }

  if (stack.length) {
    return false;
  } else {
    return true;
  }
}

let string1 = "()()[{()})]";

console.log(balancedBrackets(string1));

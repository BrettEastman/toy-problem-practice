// Write a function that takes in a string of words, separated by one or more white spaces and returns a string that has these words in reverse order. For example, given the string, "Tim is great" your function should return "great is Tim"

// For this problem a word can contain special characters, punctuation and numbers. The words in the string will be separated by one or more white spaces, and the reverse string must contain the same white spaces as the original string, for example, given the string "whitespaces    4" you would be expected to return "4    whitespaces". Note that you’re not allowed to use any built-in split or reverse methods/functions. However, you are allowed to use a built-in join method/function. Also note that the input string isn’t guaranteed to always contain words.

function reverseWordsInString(string) {
  const resultArr = [];
  let spaces = false;
  let currentWord = "";
  let currentSpaces = "";

  for (let i = 0; i < string.length; i++) {
    let char = string[i];

    if (char !== " " && spaces === false) {
      currentWord += char;
    } else if (char === " ") {
      spaces = true;
      currentSpaces += char;
    } else {
      resultArr.unshift(currentWord);
      resultArr.unshift(currentSpaces);
      spaces = false;
      currentWord = char;
      currentSpaces = "";
    }
  }
  resultArr.unshift(currentWord);
  resultArr.unshift(currentSpaces);

  return resultArr.join("");
}

let str = "Algoexpert is the best!";
console.log(reverseWordsInString(str));

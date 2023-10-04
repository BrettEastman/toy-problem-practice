// Minimum characters for words,

// Write a function that takes in an array of words and returns the smallest array of characters needed to form all of the words. The characters don’t need to be in any particular order.

// For example, the characters ['y','r','o','u'] are needed to form the words ['your', 'you', 'or', 'yo']

// Note the input words won’t contain any spaces. However, they might contain punctuation and or special characters.

// my solution 10/4/23
function minimumCharactersForWords(words) {
  let resultArr = [];
  let resultObj = {};
  for (word of words) {
    let currentWordObj = {};
    for (char of word) {
      if (currentWordObj[char] === undefined) {
        currentWordObj[char] = 1;
      } else {
        currentWordObj[char]++;
      }
    }
    for (let charCount in currentWordObj) {
      if (resultObj[charCount] === undefined) {
        resultObj[charCount] = currentWordObj[charCount];
      } else if (currentWordObj[charCount] > resultObj[charCount]) {
        resultObj[charCount] = currentWordObj[charCount];
      }
    }
  }

  let charKeys = Object.keys(resultObj);

  for (let i = 0; i < charKeys.length; i++) {
    let currentChar = charKeys[i];
    let count = resultObj[currentChar];
    while (count > 0) {
      resultArr.push(currentChar);
      count--;
    }
  }
  return resultArr;
}

let wordList = ["this", "that", "did", "deed", "them!", "a"];
console.log(minimumCharactersForWords(wordList));

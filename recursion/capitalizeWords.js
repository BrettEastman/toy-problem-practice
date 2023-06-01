// capitalizeWords
// Write a recursive function called capitalizeWords. Given an array of words, return a new array containing each word capitalized.

// my version 5/31/23
function capitalizeWords (arr) {
  // add whatever parameters you deem necessary - good luck!
  if (!arr.length) {
      return [];
  }
  return [arr[0].toUpperCase()].concat(capitalizeWords(arr.slice(1)))
}

// Julie's version:
function capitalizeWords (words) {
  if (words.length === 1) {
    return [words[0].toUpperCase()];
  }
  return [words[0].toUpperCase()].concat(capitalizeWords(words.slice(1)));
}

// Colt Steele solution:
function capitalizeWords (array) {
  if (array.length === 1) {
    return [array[0].toUpperCase()];
  }
  let res = capitalizeWords(array.slice(0, -1));
  res.push(array.slice(array.length-1)[0].toUpperCase());
  return res;

}

let words = ['i', 'am', 'learning', 'recursion'];
console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']
// You are given two strings order and s. All the characters of order are unique and were sorted in some custom order previously.

// Permute the characters of s so that they match the order that order was sorted. More specifically, if a character x occurs before a character y in order, then x should occur before y in the permuted string.

// Return any permutation of s that satisfies this property.

// my solution
var customSortString = function (order, s) {
  // create var of object of order numbered order elements
  // create empty resObject
  let resObj = {};

  // for each el in order
  for (let i = 0; i < order.length; i++) {
    // if el is not in resObject
    if (resObj[order[i]] === undefined) {
      // create new el in object at the current index
      resObj[order[i]] = i;
      resObj[i] = order[i];
    }
  }

  // create miscChars arr
  let miscChars = [];

  // create a numeric representation of the s array
  // create empty arr
  let sAsNums = [];

  // for each el in s
  for (let j = 0; j < s.length; j++) {
    // if el in resObject
    if (resObj[s[j]] !== undefined) {
      // push number to the array
      sAsNums.push(resObj[s[j]]);
    } else {
      miscChars.push(s[j]);
    }
  }

  // sort the sAsNums arr
  sAsNums.sort((a, b) => a - b);

  // result string ""
  let resString = "";
  // for loop through sAsNums
  for (let num of sAsNums) {
    // add each letter (by searching resObject)
    resString += resObj[num];
  }

  // return string plus miscChars arr toString
  return resString + miscChars.join("");
};

let exampleOrder = "cba";
let exampleS = "abcd";

console.log(customSortString(exampleOrder, exampleS));

// Leetcode comment solution:
var customSortString = function (order, s) {
  const charCount = {};
  for (const char of order) {
    charCount[char] = 0;
  }

  for (const char of s) {
    if (charCount[char] !== undefined) {
      charCount[char]++;
    }
  }

  let sortedS = "";
  for (const char of order) {
    sortedS += char.repeat(charCount[char]);
  }

  for (const char of s) {
    if (!order.includes(char)) {
      sortedS += char;
    }
  }

  return sortedS;
};

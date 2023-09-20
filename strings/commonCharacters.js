// Common characters.
// Write a function that takes in a non-empty list of non-empty strings, and returns. A list of characters that are common to all strings in the list, ignoring multiplicity.
// Note that the strings are not guaranteed to only contain alpha numeric characters. Unless you return can be in any order

// My first solution 9/19/23
function commonCharacters(strings) {
  // create baseString var strings[0]
  const baseString = strings[0];
  // create resultArr
  const resultArr = [];
  // for loop through the baseString
  for (let i = 0; i < baseString.length; i++) {
    // create currentChar var
    let currentChar = baseString[i];
    let inAllThings;
    // for loop through strings arr
    for (let j = 0; j < strings.length; j++) {
      // create inAllStrings equal to true
      inAllStrings = true;
      // if currentStr includes currentChar
      if (!strings[j].split("").includes(currentChar)) {
        inAllStrings = false;
        break;
      }
    }
    // if AllStrings true, resultArr push currentChar
    if (inAllStrings) {
      if (!resultArr.includes(currentChar)) {
        resultArr.push(currentChar);
      }
    }
  }
  return resultArr;
}

// My second solution 9/19/23 - different from, but inspired by the Algoexpert solution
function commonCharacters(strings) {
  // create chars obj
  const charsObj = {};
  // create resultArr
  const resultArr = [];
  // for loop over strings
  for (let string of strings) {
    // for each string, create a Set
    let stringSet = new Set(string);
    // for loop over each set
    for (let char of stringSet) {
      // if char is undefinied in charsObj
      if (charsObj[char] === undefined) {
        // add it with value of 1
        charsObj[char] = 1;
      } else {
        charsObj[char]++;
      }
    }
  }

  // for in loop over object
  const keys = Object.keys(charsObj);
  for (let key of keys) {
    // if a chars value is equal to the strings.length
    if (charsObj[key] === strings.length) {
      // then add it to the resultArr
      resultArr.push(key);
    }
  }
  return resultArr;
}

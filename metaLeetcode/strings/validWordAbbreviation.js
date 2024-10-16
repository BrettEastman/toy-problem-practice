// Leetcode: 408. Valid Word Abbreviation
// https://leetcode.com/problems/valid-word-abbreviation/
// Easy
// Given a non-empty string s and an abbreviation abbr, return whether the string matches with the given abbreviation.
// A string such as "word" contains only the following valid abbreviations:
// ["word", "1ord", "w1rd", "wo1d", "wor1", "2rd", "w2d", "wo2", "1o1d", "1or1", "w1r1", "1o2", "2r1", "3d", "w3", "4"]
// Notice that only the above abbreviations are valid abbreviations of the string "word". Any other string is not a valid abbreviation of "word".
// Note:
// Assume s contains only lowercase letters and abbr contains only lowercase letters and digits.
// Example 1:
// Input: s = "internationalization", abbr = "i12iz4n"
// Output: true
// Explanation: The word "internationalization" can be represented as "i12iz4n".
// Example 2:
// Input: s = "apple", abbr = "a2e"
// Output: false
// Explanation: The word "apple" cannot be represented as "a2e".

/**
 * @param {string} word
 * @param {string} abbr
 * @return {boolean}
 */
// my solution, which is really long and not very efficient, but passed all of the tests
var validWordAbbreviation = function (word, abbr) {
  // add up length of abbreviation by counting letters and adding the numbers to it
  let abbLength = 0;
  let isNum = false;
  let currentNumString = "";
  let numsLength = 0;

  let firstAbbChar = abbr[0];
  let lastAbbChar = abbr[abbr.length - 1];
  let firstWordChar = word[0];
  let lastWordChar = word[word.length - 1];

  if (abbr.charCodeAt(abbr.length - 1) > 58) {
    if (lastWordChar !== lastAbbChar) {
      return false;
    }
  } else if (abbr.charCodeAt(0) > 58) {
    if (firstWordChar !== firstAbbChar) {
      return false;
    }
  }

  for (let i = 0; i < abbr.length; i++) {
    let currentCharCode = abbr.charCodeAt(i);
    if (currentCharCode >= 48 && currentCharCode < 58) {
      if (isNum === false && currentCharCode === 48) {
        // return false because it is a leading zero which disqualifies it automatically
        return false;
      } else {
        isNum = true;
        currentNumString += abbr[i];
      }
      // else if it is a letter but isNum is still set to true
    } else if (isNum) {
      isNum = false;
      numsLength += Number(currentNumString);
      currentNumString = "";
      abbLength++;
    } else {
      abbLength++;
    }
  }

  if (currentNumString !== "") {
    numsLength += Number(currentNumString);
  }

  if (word.length === abbLength + numsLength) {
    return true;
  } else {
    return false;
  }
};

let exampleWord = "internationalization";
let exampleAbbr = "i12iz4n";
console.log(validWordAbbreviation(exampleWord, exampleAbbr)); // true

// good two-pointer solution from Leetcode Discussion
var validWordAbbreviation = function (word, abbr) {
  const numsSet = new Set("1234567890".split(""));
  let j = 0;
  let i = 0;
  while (i < word.length) {
    if (numsSet.has(abbr[j])) {
      let num = "";
      // 1. discard leading zero.
      if (num.length == 0 && abbr[j] == "0") return false;
      // 2. we get the number we will skip;
      while (numsSet.has(abbr[j])) {
        num += abbr[j];
        j++;
      }
      // if i=1 and we skip 12;
      i += Number(num);
    } else if (i > word.length || word[i] !== abbr[j]) {
      return false;
    } else {
      i++;
      j++;
    }
  }

  return j == abbr.length && i == word.length;
};

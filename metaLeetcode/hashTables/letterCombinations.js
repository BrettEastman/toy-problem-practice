// Leetcode: 17. Letter Combinations of a Phone Number
// URL: https://leetcode.com/problems/letter-combinations-of-a-phone-number/
// Medium
// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

// A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.
// Example 1:
// Input: digits = "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

// Example 2:
// Input: digits = ""
// Output: []

// Example 3:
// Input: digits = "2"
// Output: ["a","b","c"]

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  // create a map of digits to letters
  const map = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  // create a result array to store the combinations
  const result = [];

  // create a recursive helper function to generate the combinations
  function generateCombinations(index, current) {
    // base case: if the current combination has the same length as the digits, push it to the result array
    if (current.length === digits.length) {
      result.push(current);
      return;
    }

    // get the current digit
    const digit = digits[index];
    // get the corresponding letters
    const letters = map[digit];

    // iterate through the letters
    for (let letter of letters) {
      // call the helper function with the next index and the current combination
      generateCombinations(index + 1, current + letter);
    }
  }

  // call the helper function with the initial index and an empty string
  if (digits.length) generateCombinations(0, "");

  return result;
};

// my version of the above code
var letterCombinations = function (digits) {
  // create a map of telephone numbers/letters
  let map = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  // create a final result arr
  let result = [];

  // create a recursive function getCombos with two parameters - currentLetterCombo, index
  function getCombos(currentLettersCombo, index) {
    // base case - if current.length is equal to digits.length
    if (currentLettersCombo.length === digits.length) {
      // then push current onto result
      result.push(currentLettersCombo);
      // return to end this function call
      return;
    }

    // otherwise we need to get the current digit from whatever index is passed in
    let currentDigit = digits[index];
    // then we need to get the letters from the map object
    let currentLetters = map[currentDigit];
    // then we need to iterate through the letters and recursivesly call with currentLetterCombo plus letter, and index + 1
    for (let letter of currentLetters) {
      getCombos(currentLettersCombo + letter, index + 1);
    }
  }

  // make the first function call with 0 as the index and a blank string as the currentLetterCombo
  if (digits.length) getCombos("", 0);
  return result;
};

let exampleDigits = "23";
console.log(letterCombinations(exampleDigits)); // ["ad","ae","af","bd","be","bf","cd","ce","cf"]\

// Time Complexity: O(4^n), where n is the number of digits in the input string. In the worst case, each digit corresponds to 4 letters, so there are 4^n possible combinations. I think we round it to 4^n because each digit can have up to 4 letters, so we have to consider all possible combinations.
// Space Complexity: The space complexity of the result array is O(4^n) because there are 4^n possible combinations.

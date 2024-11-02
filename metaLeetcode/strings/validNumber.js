// Leetcode: 65. Valid Number
// URL: https://leetcode.com/problems/valid-number/
// Difficulty: Hard
// Given a string s, return whether s is a valid number.

// For example, all the following are valid numbers: "2", "0089", "-0.1", "+3.14", "4.", "-.9", "2e10", "-90E3", "3e+7", "+6e-1", "53.5e93", "-123.456e789", while the following are not valid numbers: "abc", "1a", "1e", "e3", "99e2.5", "--6", "-+3", "95a54e53".

// Formally, a valid number is defined using one of the following definitions:

// An integer number followed by an optional exponent.
// A decimal number followed by an optional exponent.
// An integer number is defined with an optional sign '-' or '+' followed by digits.

// A decimal number is defined with an optional sign '-' or '+' followed by one of the following definitions:

// Digits followed by a dot '.'.
// Digits followed by a dot '.' followed by digits.
// A dot '.' followed by digits.
// An exponent is defined with an exponent notation 'e' or 'E' followed by an integer number.

// The digits are defined as one or more digits.

// Example 1:
// Input: s = "0"
// Output: true

// Example 2:
// Input: s = "e"
// Output: false

// Example 3:
// Input: s = "."
// Output: false

// Co-pilot version:
/**
 * @param {string} s
 * @return {boolean}
 */
// var isNumber = function (s) {
//   let decimalSeen = false;
//   let exponentSeen = false;
//   let numberSeen = false;

//   for (let i = 0; i < s.length; i++) {
//     let char = s[i];

//     if ("0123456789".includes(char)) {
//       numberSeen = true;
//     } else if (char === "+" || char === "-") {
//       if (i > 0 && s[i - 1] !== "e" && s[i - 1] !== "E") {
//         return false;
//       }
//     } else if (char === ".") {
//       if (decimalSeen || exponentSeen) {
//         return false;
//       }
//       decimalSeen = true;
//     } else if (char === "e" || char === "E") {
//       if (exponentSeen || !numberSeen) {
//         return false;
//       }
//       numberSeen = false;
//       exponentSeen = true;
//     } else {
//       return false;
//     }
//   }
// };

// my interpretation of Python solution, which passed all test cases:
/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function (s) {
  // make a numberSeen and decimalSceen var to record whether or not either has been seen
  let numberSeen = false;
  let decimalSeen = false;
  let i = 0;

  // first check if the item is a + or a -
  if (s[i] === "+" || s[i] === "-") {
    // if so, then increment i. All good so far
    i++;
  }

  // main while loop - while i is less than s.length
  while (i < s.length) {
    // create currentChar, followed by all the conditionals
    let currentChar = s[i];
    // if it IS a number
    if ("0123456789".includes(currentChar)) {
      numberSeen = true;
    } else if (currentChar === ".") {
      if (decimalSeen) return false;
      decimalSeen = true;
    } else if (currentChar === "e" || currentChar === "E") {
      if (!numberSeen) return false;
      return isValidInteger(s.slice(i + 1));
    } else {
      return false;
    }
    i++;
  }
  return numberSeen;
};

function isValidInteger(string) {
  if (!string) return false;
  let numberSeen = false;
  let i = 0;

  if (string[i] === "+" || string[i] === "-") {
    i++;
  }

  while (i < string.length) {
    if (!"0123456789".includes(string[i])) {
      return false;
    } else {
      numberSeen = true;
    }
    i++;
  }
  return numberSeen;
}

let exampleS = "3.";
console.log(isNumber(exampleS)); // true

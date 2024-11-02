// Leetcode: 8. String to Integer (atoi)
// URL: https://leetcode.com/problems/string-to-integer-atoi/
// Difficulty: Medium

// Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer.

// The algorithm for myAtoi(string s) is as follows:

// Whitespace: Ignore any leading whitespace (" ").
// Signedness: Determine the sign by checking if the next character is '-' or '+', assuming positivity if neither present.
// Conversion: Read the integer by skipping leading zeros until a non-digit character is encountered or the end of the string is reached. If no digits were read, then the result is 0.
// Rounding: If the integer is out of the 32-bit signed integer range [-2**31, 2**31 - 1], then round the integer to remain in the range. Specifically, integers less than -2**31 should be rounded to -2**31, and integers greater than 2**31 - 1 should be rounded to 2**31 - 1.
// Return the integer as the final result.

// Example 1:

// Input: s = "42"

// Output: 42

// Explanation:

// The underlined characters are what is read in and the caret is the current reader position.
// Step 1: "42" (no characters read because there is no leading whitespace)
//          ^
// Step 2: "42" (no characters read because there is neither a '-' nor '+')
//          ^
// Step 3: "42" ("42" is read in)
//            ^

/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  // Initialize the index and the sign
  let i = 0;
  let sign = 1;
  let result = 0;

  // Skip leading whitespace
  while (s[i] === " ") {
    i++;
  }

  // Determine the sign
  if (s[i] === "+" || s[i] === "-") {
    sign = s[i] === "-" ? -1 : 1;
    i++;
  }

  // Read the integer
  while (i < s.length) {
    const digit = s[i];
    if (digit < "0" || digit > "9") {
      break;
    }

    // Check for overflow
    if (result > Math.floor((2 ** 31 - 1 - digit) / 10)) {
      return sign === 1 ? 2 ** 31 - 1 : -(2 ** 31);
    }

    result = result * 10 + parseInt(digit);
    i++;
  }

  return result * sign;
};

// Copilot version:
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  let result = 0;
  let isNegative = false;
  let index = 0;
  const upperBound = 2 ** 31 - 1;
  const lowerBound = -(2 ** 31);

  // Step 1: Trim leading spaces
  s = s.trim();

  // Step 2: Check if the string is empty after trimming
  if (!s) return 0;

  // Step 3: Handle optional + or - sign
  if (s[index] === "-") {
    isNegative = true;
    index++;
  } else if (s[index] === "+") {
    index++;
  }

  // Step 4: Process numerical digits
  while (index < s.length && s[index] >= "0" && s[index] <= "9") {
    result = result * 10 + (s[index] - "0");
    index++;

    // Step 5: Check for overflow and clamp if necessary
    if (!isNegative && result > upperBound) return upperBound;
    if (isNegative && -result < lowerBound) return lowerBound;
  }

  // Step 6: Apply sign and return result
  return isNegative ? -result : result;
};

// my final version (combination of a few different versions):
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  let result = "";
  let isNegative = false;
  let i = 0;
  const upperBounds = 2 ** 31 - 1;
  const lowerBounds = -(2 ** 31);

  s = s.trim();

  if (!s) return 0;

  if (s[i] === "-") {
    isNegative = true;
    i++;
  } else if (s[i] === "+") {
    i++;
  }

  while (i < s.length && s[i] >= "0" && s[i] <= "9") {
    result += s[i];
    i++;
  }

  if (isNegative) {
    result = -result;
  } else {
    result = +result;
  }

  if (result > upperBounds) {
    return upperBounds;
  } else if (result < lowerBounds) {
    return lowerBounds;
  } else {
    return result;
  }
};

// Leetcode: # 6 ZigZag Conversion
// URL: https://leetcode.com/problems/zigzag-conversion/
// Difficulty: Medium
//
// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"

// Write the code that will take a string and make this conversion given a number of rows.

// Example 1:
// Input: s = "PAYPALISHIRING", numRows = 3
// Output: "PAHNAPLSIIGYIR"

// Example 2:
// Input: s = "PAYPALISHIRING", numRows = 4
// Output: "PINALSIGYAHRPI"
// Explanation:
// P     I    N
// A   L S  I G
// Y A   H R
// P     I

// Example 3:
// Input: s = "A", numRows = 1
// Output: "A"

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  // If there's only one row, return the string as is since no zigzag is needed.
  if (numRows === 1) return s;

  // Initialize an array of empty strings for each row.
  const rows = new Array(numRows).fill("");

  let row = 0; // Start from the first row.
  let direction = 1; // Direction indicates movement: 1 for down, -1 for up.

  // Iterate through each character in the input string.
  for (let char of s) {
    rows[row] += char; // Append the current character to the appropriate row.

    row += direction; // Move to the next row based on the current direction.

    // Change direction if we reach the top or bottom row.
    if (row === 0 || row === numRows - 1) {
      direction *= -1; // Reverse the direction.
    }
  }

  // Combine all rows into a single string to get the final zigzag conversion.
  return rows.join("");
};

// Example usage:
console.log(convert("PAYPALISHIRING", 3)); // Output: "PAHNAPLSIIGYIR"
console.log(convert("PAYPALISHIRING", 4)); // Output: "PINALSIGYAHRPI"
console.log(convert("A", 1)); // Output: "A"

// Time Complexity: O(n), where n is the length of the input string s.
// my version, based on above:
var convert = function (s, numRows) {
  // if one row, return it
  if (numRows === 1) return s;
  // create an array of one string for each row. We don't need to create a matrix. We will just be following a zigzag directional pattern, adding each character to the correct string in the array
  let resultArr = new Array(numRows).fill("");
  // set the currentRow to 0
  let currentRow = 0;
  // set the direction to 1 (1 for going down, -1 for going up)
  let direction = 1;

  // we will iterate through each character in s and push it to the string index according to the direction
  for (let char of s) {
    resultArr[currentRow] += char;
    currentRow += direction;
    // after we add the char to its correct string, we need an if statement to determine if we need to change directions
    // if currentRow is either 0 or numRows - 1, then change the direction
    if (currentRow === 0 || currentRow === numRows - 1) {
      direction *= -1;
    }
  }
  return resultArr.join("");
};

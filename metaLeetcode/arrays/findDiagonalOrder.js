// Leetcode: 498. Diagonal Traverse
// URL: https://leetcode.com/problems/diagonal-traverse/
// Medium
// Given an m x n matrix mat, return an array of all the elements of the array in a diagonal order.
//
// Example 1:
// Input: mat = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [1,2,4,7,5,3,6,8,9]
//
// Example 2:
// Input: mat = [[1,2],[3,4]]
// Output: [1,2,3,4]
//

/**
 * Leetcode: 498. Diagonal Traverse
 * URL: https://leetcode.com/problems/diagonal-traverse/
 * Medium
 */

/**
 * Finds the diagonal order traversal of a given matrix.
 *
 * @param {number[][]} mat - The input 2D matrix.
 * @return {number[]} - The elements of the matrix in diagonal order.
 */
var findDiagonalOrder = function (mat) {
  const m = mat.length; // Number of rows in the matrix
  const n = mat[0].length; // Number of columns in the matrix
  const numOfDiagonals = m + n - 1; // Total number of diagonals in the matrix
  const result = []; // Array to store the final diagonal traversal

  // Iterate through each diagonal
  for (let i = 0; i < numOfDiagonals; i++) {
    const temp = []; // Temporary array to store elements of the current diagonal

    // Determine the starting point (x, y) for the current diagonal
    // The starting coordinates (x, y) for each diagonal are calculated based on whether the diagonal index i is less than the number of columns n.
    // If i < n, the traversal starts at the first row (x = 0) and the i-th column (y = i).
    // If i >= n, the traversal starts at the (i - n + 1)-th row and the last column (y = n - 1).
    let x = i < n ? 0 : i - n + 1;
    let y = i < n ? i : n - 1;

    // Traverse the current diagonal and collect elements
    // A while loop traverses the current diagonal by incrementing the row index x and decrementing the column index y.
    // Each valid element mat[x][y] within the matrix bounds is added to the temp array.
    while (x < m && y >= 0) {
      temp.push(mat[x][y]); // Add the current element to the temporary array
      x++; // Move down to the next row
      y--; // Move left to the previous column
    }

    // If the diagonal index is even, reverse the collected elements to achieve the zigzag pattern
    // For odd diagonals, keep the order as is
    if (i % 2 === 0) {
      result.push(...temp.reverse());
    } else {
      result.push(...temp);
    }
  }

  return result; // Return the final array containing elements in diagonal order
};

// Example usage:
let example1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(findDiagonalOrder(example1)); // Output: [1,2,4,7,5,3,6,8,9]

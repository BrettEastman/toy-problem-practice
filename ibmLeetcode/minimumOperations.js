// Leetcode 3402. Minimum Operations to Make Columns Strictly Increasing
// Level: Easy

// You are given a m x n matrix grid consisting of non-negative integers.
// In one operation, you can increment the value of any grid[i][j] by 1.
// Return the minimum number of operations needed to make all columns of grid strictly increasing.

// Example 1:
// Input: grid = [[3,2],[1,3],[3,4],[0,1]]
// Output: 15
// Explanation:
// To make the 0th column strictly increasing, we can apply 3 operations on grid[1][0], 2 operations on grid[2][0], and 6 operations on grid[3][0].
// To make the 1st column strictly increasing, we can apply 4 operations on grid[3][1].

// My original solution:
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumOperations = function (grid) {
  let result = 0;
  let rowLength = grid[0].length;
  for (let row = 1; row < grid.length; row++) {
    for (let col = 0; col < rowLength; col++) {
      let upperColNum = grid[row - 1][col];
      let currentColNum = grid[row][col];
      if (currentColNum - upperColNum <= 0) {
        let numOperations = Math.abs(currentColNum - upperColNum) + 1;
        grid[row][col] = currentColNum + numOperations;
        result += numOperations;
      }
    }
  }
  return result;
};

// Another correct solution:
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumOperations2 = function (grid) {
  let result = 0;

  for (let j = 0; j < grid[0].length; j++) {
    for (let i = 1; i < grid.length; i++) {
      if (grid[i][j] <= grid[i - 1][j]) {
        result += grid[i - 1][j] - grid[i][j] + 1;
        grid[i][j] = grid[i - 1][j] + 1;
      }
    }
  }

  return result;
};

let exampleGrid = [
  [3, 2],
  [1, 3],
  [3, 4],
  [0, 1],
];
console.log(minimumOperations(exampleGrid)); // 15

// Leetcode 36. Valid Sudoku
// Medium
//
// Determine if a 9 x 9 Sudoku board is valid in its current state. Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// Note:

// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  // create a new set called seen which will store all of the unique values for each row, column, and square. Note: I originally tried to use a Map with a Set for each row, column, and square but it was too complicated and verbose.
  let seen = new Set();

  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      let currentRowCol = board[r][c];
      if (currentRowCol === ".") {
        continue;
      }
      // create three entries to go into Set
      let row = `row ${r} ${currentRowCol}`;
      let col = `col ${c} ${currentRowCol}`;
      let square = `square ${Math.floor(r / 3)},${Math.floor(
        c / 3
      )} ${currentRowCol}`;
      // if it has any of these already, return false
      if (seen.has(row) || seen.has(col) || seen.has(square)) {
        return false;
      }
      seen.add(row);
      seen.add(col);
      seen.add(square);
    }
  }
  return true;
};

let board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

console.log(isValidSudoku(board)); // Output: true

// Leetcode: 79. Word Search
// URL: https://leetcode.com/problems/word-search/
// Medium
// Given an m x n grid of characters board and a string word, return true if word exists in the grid.

// The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

// Example 1:
// Input: board = [
//  ["A","B","C","E"],
//  ["S","F","C","S"],
//  ["A","D","E","E"]
// ],
// word = "ABCCED"
// Output: true

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  // create rowLength and colLength
  let rowLength = board.length;
  let colLength = board[0].length;

  // create dfs helper function, with parameters for row, col, and index. This will recursively search for the word and return true or false
  function dfs(row, col, index) {
    // Base case: if the index is the same as the word length, then we have reached the end of the word, so return true
    if (index === word.length) return true;
    // If we are out of bounds or if the current cell doesn't match the current char of the word,
    // return false
    if (
      row < 0 ||
      col < 0 ||
      row >= rowLength ||
      col >= colLength ||
      board[row][col] !== word[index]
    ) {
      return false;
    }
    // store the current character (from the grid) in a temporary variable
    let temp = board[row][col];
    // replace that same current character with a "#" to indicate it has been visited
    board[row][col] = "#";
    // recursively search for the next char in the word in all four directions - save it to a variable called "found"
    let found =
      dfs(row + 1, col, index + 1) ||
      dfs(row - 1, col, index + 1) ||
      dfs(row, col + 1, index + 1) ||
      dfs(row, col - 1, index + 1);
    // now replace that character "#" with the temporary variable we saved
    board[row][col] = temp;
    // return found
    return found;
  }

  // now do a brute force iteration through the board, calling dfs helper function on each space
  // if the dfs is true, then return true
  for (let r = 0; r < rowLength; r++) {
    for (let c = 0; c < colLength; c++) {
      if (dfs(r, c, 0)) {
        return true;
      }
    }
  }

  // otherwise if nothing ever returned true, then return false
  return false;
};

// Time complexity: O(4(N∗M))

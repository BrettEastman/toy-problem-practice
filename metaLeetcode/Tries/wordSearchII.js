// Leetcode: 212. Word Search II
// URL: https://leetcode.com/problems/word-search-ii/
// Hard
// Given an m x n board of characters and a list of strings words, return all words on the board.

// Each word must be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.

// Example 1:
// Input: board = [
//  ["o","a","a","n"],
//  ["e","t","a","e"],
//  ["i","h","k","r"],
//  ["i","f","l","v"]
// ], words = ["oath","pea","eat","rain"]
// Output: ["eat","oath"]

// SOLUTION with Trie (best solution):
/**
 * Trie Node class representing each node in the trie.
 */
class TrieNode {
  constructor() {
    this.children = {}; // Maps characters to TrieNodes
    this.word = null; // Stores the complete word at the end node
  }
}

/**
 * Inserts a word into the trie.
 *
 * @param {TrieNode} root - The root of the trie.
 * @param {string} word - The word to insert.
 */
function insertTrie(root, word) {
  let node = root;
  for (let char of word) {
    if (!node.children[char]) {
      node.children[char] = new TrieNode();
    }
    node = node.children[char];
  }
  node.word = word; // Mark the end of a word
}

/**
 * Searches for words in the board using the trie for efficient lookup.
 *
 * @param {character[][]} board - The 2D board of characters.
 * @param {string[]} words - The list of words to search for.
 * @return {string[]} - The list of found words.
 */
var findWords = function (board, words) {
  const result = [];
  const root = new TrieNode();

  // Build the trie with all words
  for (let word of words) {
    insertTrie(root, word);
  }

  const rows = board.length;
  const cols = board[0].length;

  /**
   * DFS helper function to traverse the board.
   *
   * @param {number} row - Current row index.
   * @param {number} col - Current column index.
   * @param {TrieNode} node - Current trie node.
   */
  function dfs(row, col, node) {
    const char = board[row][col];
    const childNode = node.children[char];

    if (!childNode) return; // No matching child, prune search

    if (childNode.word) {
      result.push(childNode.word); // Found a word
      childNode.word = null; // Avoid duplicate entries
    }

    // Mark the current cell as visited
    board[row][col] = "#";

    // Explore all four directions
    const directions = [
      [row + 1, col],
      [row - 1, col],
      [row, col + 1],
      [row, col - 1],
    ];

    for (let [newRow, newCol] of directions) {
      if (
        newRow >= 0 &&
        newRow < rows &&
        newCol >= 0 &&
        newCol < cols &&
        board[newRow][newCol] !== "#"
      ) {
        dfs(newRow, newCol, childNode);
      }
    }

    // Restore the current cell
    board[row][col] = char;
  }

  // Traverse each cell in the board
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      dfs(r, c, root);
    }
  }

  return result;
};

// Example usage:
let board = [
  ["o", "a", "a", "n"],
  ["e", "t", "a", "e"],
  ["i", "h", "k", "r"],
  ["i", "f", "l", "v"],
];
let words = ["oath", "pea", "eat", "rain"];
console.log(findWords(board, words)); // Output: ["oath","eat"]

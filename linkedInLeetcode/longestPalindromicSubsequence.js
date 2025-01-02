// Leetcode #516: Longest Palindromic Subsequence
// Difficulty: Medium
// Topic: Dynamic Programming
// Company: LinkedIn
//
// Given a string s, find the longest palindromic subsequence's length in s.
// A subsequence is a sequence that can be derived from another sequence by deleting some or no elements without changing the order of the remaining elements.
//
// Example 1:
// Input: s = "bbbab"
// Output: 4
// Explanation: One possible longest palindromic subsequence is "bbbb".
//
// Example 2:
// Input: s = "cbbd"
// Output: 2
// Explanation: One possible longest palindromic subsequence is "bb".
//
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function (s) {
  // Create a 2D array dp where dp[i][j] represents the length of the longest palindromic subsequence in the substring s[i...j]
  let dp = Array(s.length)
    .fill()
    .map((v) => Array(s.length).fill(0));

  // Fill in the dp table
  for (let start = s.length - 1; start >= 0; start--) {
    for (let end = 0; end < s.length; end++) {
      if (start > end) {
        dp[start][end] = 0;
      } else if (start === end) {
        dp[start][end] = 1;
      } else if (s[start] === s[end]) {
        dp[start][end] = 2 + dp[start + 1][end - 1];
      } else {
        dp[start][end] = Math.max(dp[start + 1][end], dp[start][end - 1]);
      }
    }
  }

  return dp[0][s.length - 1];
};

console.log(longestPalindromeSubseq("bbbab")); // 4

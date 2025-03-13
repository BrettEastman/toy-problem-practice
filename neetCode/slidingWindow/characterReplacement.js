// Leetcode 424. Longest Repeating Character Replacement
// Level: Medium
//
// You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

// Return the length of the longest substring containing the same letter you can get after performing the above operations.

// Example 1:
// Input: s = "ABAB", k = 2
// Output: 4
// Explanation: Replace the two 'A's with two 'B's or vice versa.

// Example 2:
// Input: s = "AABABBA", k = 1
// Output: 4
// Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
// The substring "BBBB" has the longest repeating letters, which is 4.
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  let left = 0; // Represents the start of the window.
  let right = 0; // Represents the end of the window.
  let maxLength = 0; // Represents the length of the longest substring containing the same letter.
  let maxCount = 0; // Represents the count of the most frequent character in the current window.

  const charCount = new Array(26).fill(0); // Represents the count of each character in the current window.

  while (right < s.length) {
    const charIndex = s.charCodeAt(right) - 65;
    charCount[charIndex]++;
    maxCount = Math.max(maxCount, charCount[charIndex]);

    // If the number of replacements needed is greater than k, we need to shrink the window.
    if (right - left + 1 - maxCount > k) {
      charCount[s.charCodeAt(left) - 65]--;
      left++;
    }

    maxLength = Math.max(maxLength, right - left + 1);
    right++;
  }

  return maxLength;
};

// Test cases
console.log(characterReplacement("AABABBA", 1)); // 4
// console.log(characterReplacement("ABAB", 2)); // 4

// my version which I thought was good, but did not pass all test cases
var characterReplacement1 = function (s, k) {
  let maxLength = 1;
  let currentLength = 1;
  let left = 0;
  let right = 1;
  let copyK = k;

  while (right < s.length) {
    if (s[right] === s[left]) {
      currentLength++;
      maxLength = Math.max(maxLength, currentLength);
      right++;
    } else if (copyK > 0) {
      copyK--;
      currentLength++;
      maxLength = Math.max(maxLength, currentLength);
      right++;
    } else {
      maxLength = Math.max(maxLength, currentLength);
      currentLength = 1;
      left = right;
      copyK = k;
      right++;
    }
  }
  return maxLength;
};

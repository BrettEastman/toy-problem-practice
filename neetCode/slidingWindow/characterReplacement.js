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
// console.log(characterReplacement("AABABBA", 1)); // 4
// console.log(characterReplacement("ABAB", 2)); // 4

// my version which is based on the above, but uses an object instead of an array, which is more readable
// and also uses a for loop instead of a while loop
// and according to leetcode, it beats 68% of submissions
var characterReplacement1 = function (s, k) {
  let l = 0;
  let maxFreq = 0;
  let maxLength = 0;

  // create a charCount object to keep counts of all letters
  let charCount = {};

  // for loop through string
  for (let r = 0; r < s.length; r++) {
    // increment the charCount object at the charIndex property
    charCount[s[r]] === undefined ? (charCount[s[r]] = 1) : charCount[s[r]]++;
    // make maxFreq the largest of either: the current maxFreq, or the current charCount
    maxFreq = Math.max(charCount[s[r]], maxFreq);

    // if the number of replacement chars needed is greater than k
    // i.e. if the length of the window minus the maxFreq is greater than k
    if (r - l + 1 - maxFreq > k) {
      // then decrease the left charCount
      charCount[s[l]]--;
      // shrink the window by incrementing left (index)
      l++;
    }
    // make maxLength the larges of either: maxLength, or the length of the window
    maxLength = Math.max(r - l + 1, maxLength);
  }
  return maxLength;
};

console.log(characterReplacement1("AABABBA", 1)); // 4

// Leetcode: #3 Longest Substring Without Repeating Characters
// Level: Medium
// Given a string s, find the length of the longest substring without repeating characters.

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let characters = new Set();
  let l = 0;
  let result = 0;

  for (let r = 0; r < s.length; r++) {
    while (characters.has(s[r])) {
      characters.delete(s[l]);
      l++;
    }
    characters.add(s[r]);
    result = Math.max(result, r - l + 1);
  }

  return result;
};

// COLT STEELE VERSIONS:
// Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.

// // Julie's version:
// function findLongestSubstring(s){
//   let longest = 0;
//   let start = 0;
//   let seen = {};

//   for (let i = 0; i < s.length; i++) {
//     const windowSize = i - start + 1;
//     const char = s[i];
//     if (seen[char] === undefined || seen[char] < start) {
//       longest = windowSize > longest ? windowSize : longest;
//     } else {
//       start = seen[char] + 1;
//     }
//     seen[char] = i;
//   }
//   return longest;
// }

// Colt Steele version:
function findLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
  }
  return longest;
}

// console.log(findLongestSubstring('')); // 0
console.log(findLongestSubstring("rithmschool")); // 7
// console.log(findLongestSubstring('thisisawesome')); // 6
// console.log(findLongestSubstring('thecatinthehat')); // 7
// console.log(findLongestSubstring('bbbbbb')); // 1
// console.log(findLongestSubstring('longestsubstring')); // 8
// console.log(findLongestSubstring('thisishowwedoit')); // 6

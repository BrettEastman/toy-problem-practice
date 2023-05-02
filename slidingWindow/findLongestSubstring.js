// Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.

// Julie's version:
function findLongestSubstring(s){
  let longest = 0;
  let start = 0;
  let seen = {};

  for (let i = 0; i < s.length; i++) {
    const windowSize = i - start + 1;
    const char = s[i];
    if (seen[char] === undefined || seen[char] < start) {
      longest = windowSize > longest ? windowSize : longest;
    } else {
      start = seen[char] + 1;
    }
    seen[char] = i;
  }
  return longest;
}

console.log(findLongestSubstring('')); // 0
console.log(findLongestSubstring('rithmschool')); // 7
console.log(findLongestSubstring('thisisawesome')); // 6
console.log(findLongestSubstring('thecatinthehat')); // 7
console.log(findLongestSubstring('bbbbbb')); // 1
console.log(findLongestSubstring('longestsubstring')); // 8
console.log(findLongestSubstring('thisishowwedoit')); // 6
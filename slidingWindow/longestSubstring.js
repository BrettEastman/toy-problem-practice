// Given a string s and an integer k, return the length of the longest substring of s such that the frequency of each character in this substring is greater than or equal to k.

// Example 1:
// Input: s = "aaabb", k = 3
// Output: 3
// Explanation: The longest substring is "aaa", as 'a' is repeated 3 times.

// Example 2:
// Input: s = "ababbc", k = 2
// Output: 5
// Explanation: The longest substring is "ababb", as 'a' is repeated 2 times and 'b' is repeated 3 times.

// similar to mine using sliding window?
var longestSubstring = function(s, k) {
  let maxUnique = new Set(s).size;
  // we'll try substrings consisting of one distinct character to those consisting of maximum distinct characters
  let max = 0;
  for (let curUnique = 1; curUnique <= maxUnique; curUnique++) {
      let start = 0, end = 0, atLeastK = 0, unique = 0, m = new Map();
      while (end < s.length) {
          m.set(s[end], m.get(s[end]) + 1 || 1);
          if (m.get(s[end]) == 1) unique++;
          if (m.get(s[end]) == k) atLeastK++;

          while (unique > curUnique) { // move left pointer so that the number of unique characters do not exceed the upper bound
              m.set(s[start], m.get(s[start]) - 1);
              if (m.get(s[start]) == k-1) atLeastK--;
              if (m.get(s[start]) == 0) unique--;
              start++;
          }
          if (unique == curUnique && unique == atLeastK) {
              max = Math.max(max, end - start + 1);
          }
          end++;
      }
  }
  return max;
  // We are only considering lowercase alphaabets so maxUnique can be at most 26.
  // Therefore, Time complexity: O(26) * O(n) = O(n)
  // Space Complexity: O(26) = O(1)
}

// this solution got the most up votes on Leetcode discussion:
var longestSubstring = function(s, k) {
  let map=new Map();
  map.clear();
  for(item of s){
      if(map.has(item))
          map.set(item,map.get(item)+1);
      else
          map.set(item,1);
  }
  for([item,val] of map){
      if(val<k){
          let ar=s.split(item);
          let res=0;
          for(word of ar){
              res=Math.max(res,longestSubstring(word,k));
          }
          return res;
      }
  }
  return s.length;
};

// my solution - I understood it to mean longest substring where every character is repeated at least the same number of times as k
var longestSubstring = function(s, k) {
  if (k === 1) {
      return s.length;
  }
  let length = 0;
  const obj = {};
  for (char of s) {
      if (obj[char] === undefined) {
          obj[char] = 1
      } else {
          obj[char]++;
      }
  }
  let pointer1;
  let pointer2;
  for (let i = 0; i < s.length; i++) {
      if (obj[s[i]] >= k) {
          pointer1 = i;
      }
      for (let j = i + 1; j < s.length; j++) {
          if (obj[s[j]] >= k) {
              pointer2 = j + 1;
          }
          if (pointer2 - pointer1 > length) {
              length = pointer2 - pointer1;
          }
      }
  }
  return length;
};

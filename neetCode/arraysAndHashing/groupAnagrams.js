// Leetcode: 49. Group Anagrams
// URL: https://leetcode.com/problems/group-anagrams/
// Difficulty: Medium
// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// Example 1:
// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Explanation:
// There is no string in strs that can be rearranged to form "bat".
// The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
// The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let anagrams = new Map();

  for (let str of strs) {
    let sortedStr = str.split("").sort().join("");
    if (!anagrams.has(sortedStr)) {
      anagrams.set(sortedStr, []);
    }
    anagrams.get(sortedStr).push(str);
  }

  return Array.from(anagrams.values());
};

// my version:
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  // create new map of sorted strings
  let sortedStrings = new Map();

  // for loop through strings
  for (let string of strs) {
    // create sorted string
    let sortedString = string.split("").sort().join("");
    // if sorted string not already a key,
    if (!sortedStrings.has(sortedString)) {
      // add it, initialized with an empty array
      sortedStrings.set(sortedString, []);
    }
    // add the current string to that sorted string key's array
    sortedStrings.get(sortedString).push(string);
  }

  // create an array from the values of the map
  let result = Array.from(sortedStrings.values());
  // return it
  return result;
};

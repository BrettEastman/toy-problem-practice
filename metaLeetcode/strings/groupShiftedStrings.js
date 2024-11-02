// Leetcode: 249. Group Shifted Strings
// URL: https://leetcode.com/problems/group-shifted-strings/
// Difficulty: Medium
// Perform the following shift operations on a string:

// Right shift: Replace every letter with the successive letter of the English alphabet, where 'z' is replaced by 'a'. For example, "abc" can be right-shifted to "bcd" or "xyz" can be right-shifted to "yza".
// Left shift: Replace every letter with the preceding letter of the English alphabet, where 'a' is replaced by 'z'. For example, "bcd" can be left-shifted to "abc" or "yza" can be left-shifted to "xyz".
// We can keep shifting the string in both directions to form an endless shifting sequence.

// For example, shift "abc" to form the sequence: ... <-> "abc" <-> "bcd" <-> ... <-> "xyz" <-> "yza" <-> .... <-> "zab" <-> "abc" <-> ...
// You are given an array of strings strings, group together all strings[i] that belong to the same shifting sequence. You may return the answer in any order.

// Example 1:
// Input: strings = ["abc","bcd","acef","xyz","az","ba","a","z"]
// Output: [["acef"],["a","z"],["abc","bcd","xyz"],["az","ba"]]

// Example 2:
// Input: strings = ["a"]
// Output: [["a"]]

/**
 * Groups together all strings that belong to the same shifting sequence.
 *
 * @param {string[]} strings - An array of strings to be grouped.
 * @return {string[][]} - An array of groups, each containing strings from the same shifting sequence.
 */
var groupStrings = function (strings) {
  let map = new Map(); // Map to hold the grouping based on shifting patterns. If two strings have the same shifting pattern, then they will have the same key, and will be pushed to the array (value) at that key. So, one key might be "1,1,1," and the value would be an array of strings from the main strings argument that have that shifting pattern. Another key might be "2,2,2," and another might be '1,1,2,' etc.

  for (let str of strings) {
    let key = ""; // Unique key representing the shifting pattern of the current string

    for (let i = 1; i < str.length; i++) {
      // Calculate the difference between consecutive characters. This is where we start to identify the pattern that will be used as the key.
      let diff = str.charCodeAt(i) - str.charCodeAt(i - 1);

      // Adjust the difference for wrap-around (e.g., 'a' after 'z')
      diff = diff < 0 ? diff + 26 : diff;

      key += diff + ","; // Append the difference to the key with a separator
    }

    if (!map.has(key)) {
      map.set(key, []); // Initialize a new group if the key doesn't exist
    }

    map.get(key).push(str); // Add the current string to the appropriate group
  }

  return Array.from(map.values()); // Convert the map values to an array of groups
};

// Example usage:
let example1 = ["abc", "bcd", "acef", "xyz", "az", "ba", "a", "z"];
let example2 = ["a"];
console.log(groupStrings(example1)); // [["acef"],["a","z"],["abc","bcd","xyz"],["az","ba"]]
console.log(groupStrings(example2)); // [["a"]]

// Leetcode 347. Top K Frequent Elements
// URL: https://leetcode.com/problems/top-k-frequent-elements/
// Difficulty: Medium
//
// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

// Example 1:
// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]

// Example 2:
// Input: nums = [1], k = 1
// Output: [1]

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  // Create a map to store the frequency of each number
  let freqMap = new Map();
  for (let num of nums) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }

  // Create an array to store the unique numbers
  let uniqueNums = Array.from(freqMap.keys());

  // Sort the unique numbers by frequency (**sort greatest to least)
  uniqueNums.sort((a, b) => freqMap.get(b) - freqMap.get(a));

  // Return the top k frequent elements
  return uniqueNums.slice(0, k);
};

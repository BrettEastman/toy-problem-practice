// Leetcode: 1. Two Sum
// Level: Easy

// my solution
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    let current1st = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      let current2nd = nums[j];
      if (current1st + current2nd === target) {
        return [i, j];
      }
    }
  }
};

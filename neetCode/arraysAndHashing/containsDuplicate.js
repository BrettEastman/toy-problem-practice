// Leetcode 217. Contains Duplicate
// Level: Easy

// my solution
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  nums.sort((a, b) => a - b);
  for (let i = 1; i < nums.length; i++) {
    let prev = nums[i - 1];
    let current = nums[i];
    if (prev === current) {
      return true;
    }
  }
  return false;
};

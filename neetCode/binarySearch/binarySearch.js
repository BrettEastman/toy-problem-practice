// Leetcode 704: Binary Search
// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let low = 0;
  let high = nums.length;

  while (low < high) {
    const mid = Math.floor((high + low) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      high = mid;
    } else {
      low = mid + 1;
    }
  }
  return -1;
};

console.log(search([-1, 0, 3, 5, 9, 12], 9));

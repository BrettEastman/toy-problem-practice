// Leetcode: 162. Find Peak Element
// URL: https://leetcode.com/problems/find-peak-element/
// Difficulty: Medium
//
// A peak element is an element that is strictly greater than its neighbors.
// Given a 0-indexed integer array nums, find a peak element, and return its index. If the array contains multiple peaks, return the index to any of the peaks.
// You may imagine that nums[-1] = nums[n] = -∞. In other words, an element is always considered to be strictly greater than a neighbor that is outside the array.
// You must write an algorithm that runs in O(log n) time.

// My solution, which worked fine on Leetcode, but I don't think it's O(log n) time:
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  // Go through arr once only, at each item checking to see if if it is bigger than previous and next and if so, returning it
  for (let i = 0; i < nums.length; i++) {
    if (nums[i - 1] === undefined && nums[i + 1] === undefined) {
      return i;
    } else if (nums[i - 1] === undefined && nums[i] > nums[i + 1]) {
      return i;
    } else if (nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) {
      return i;
    } else if (nums[i] > nums[i - 1] && nums[i + 1] === undefined) {
      return i;
    } else {
      continue;
    }
  }
};

// Apparently this is a correct O(log n) time solution that I tried based on other solutions:
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  let start = 0;
  let end = nums.length - 1;
  let mid;

  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    let currVal = nums[mid];
    let prevVal = nums[mid - 1] || -Infinity;
    let nextVal = nums[mid + 1] || -Infinity;

    if (currVal > prevVal && currVal > nextVal) return mid;
    if (currVal < prevVal) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return 0;
};

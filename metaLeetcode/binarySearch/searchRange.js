// Leetcode: 34. Find First and Last Position of Element in Sorted Array
// URL: https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
// Medium
// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.
//
// If target is not found in the array, return [-1, -1].
//
// You must write an algorithm with O(log n) runtime complexity.
//
// Example 1:
// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]
//
// Example 2:
// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]
//

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  // create a helper function to find the leftmost index of the target
  function findLeftmost() {
    let left = 0;
    let right = nums.length - 1;
    let index = -1;

    while (left <= right) {
      let mid = Math.floor((left + right) / 2);

      if (nums[mid] === target) {
        index = mid;
        right = mid - 1;
      } else if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return index;
  }

  // create a helper function to find the rightmost index of the target
  function findRightmost() {
    let left = 0;
    let right = nums.length - 1;
    let index = -1;

    while (left <= right) {
      let mid = Math.floor((left + right) / 2);

      if (nums[mid] === target) {
        index = mid;
        left = mid + 1;
      } else if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return index;
  }

  // get the leftmost and rightmost indices
  let left = findLeftmost();
  let right = findRightmost();

  return [left, right];
};

let exampleNums = [5, 7, 7, 8, 8, 10];
let exampleTarget = 8;
console.log(searchRange(exampleNums, exampleTarget)); // [3, 4]

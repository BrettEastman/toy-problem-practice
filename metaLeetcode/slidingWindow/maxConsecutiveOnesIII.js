// Leetcode: 1004. Max Consecutive Ones III
// URL: https://leetcode.com/problems/max-consecutive-ones-iii/
// Difficulty: Medium
//
// Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.

// Example 1:
// Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
// Output: 6
// Explanation: [1,1,1,0,0,1,1,1,1,1,1]
// Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.

// Example 2:
// Input: nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3
// Output: 10
// Explanation: [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
// Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.

/**
 * Finds the length of the longest subarray containing only 1's after flipping at most k 0's.
 * @param {number[]} nums - The binary array.
 * @param {number} k - Maximum number of 0's that can be flipped.
 * @return {number} - The length of the longest subarray with all 1's after at most k flips.
 */
var longestOnes = function (nums, k) {
  let left = 0; // Left boundary of the sliding window - starts at the beginning of the array
  let right = 0; // Right boundary of the sliding window - also starts at the beginning of the array
  let maxOnes = 0; // Maximum length of 1's sequence found

  while (right < nums.length) {
    // If the current element is 0, use one flip
    if (nums[right] === 0) {
      k--;
    }

    // If flips used exceed k, move the left boundary to fix the problem and reduce flips
    while (k < 0) {
      // it will cycle through the array, incrementing the left pointer until it finds a 0
      // If we move past a flipped 0, we get that flip back and can use it again
      if (nums[left] === 0) {
        k++; // Reclaim a flip when a 0 is removed from the window
      }
      left++; // Shrink the window from the left: We will move the left pointer to the right until we have flips available again
      // This is the key to the sliding window approach: We are trying to find the longest sequence of 1's with at most k flips
    }

    // Update the maximum length if the current window is larger
    maxOnes = Math.max(maxOnes, right - left + 1);
    right++; // Expand the window to include the next element - we are using the right pointer to look at each lego block in the array
  }

  return maxOnes; // Return the maximum sequence length found
};

let exampleNums = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0];
let exampleK = 2;
console.log(longestOnes(exampleNums, exampleK)); // Output: 6

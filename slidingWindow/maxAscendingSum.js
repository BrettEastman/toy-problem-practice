// Given an array of positive integers nums, return the maximum possible sum of an ascending subarray in nums.

// A subarray is defined as a contiguous sequence of numbers in an array.

// A subarray [numsl, numsl+1, ..., numsr-1, numsr] is ascending if for all i where l <= i < r, numsi < numsi+1. Note that a subarray of size 1 is ascending.

// Example 1:

// Input: nums = [10,20,30,5,10,50]
// Output: 65
// Explanation: [5,10,50] is the ascending subarray with the maximum sum of 65.

// correct solution:
var maxAscendingSum = function (nums) {
  let tempSum = 0, sum = 0;
  for (let i = 0; i < nums.length; i++) {
      let curr = nums[i], next = nums[i + 1];
      if (curr > tempSum) {
          tempSum = curr;
          if (sum < tempSum) sum = tempSum;
      }
      if (next > curr) {
          tempSum += next;
          if (tempSum > sum) sum = tempSum;
      } else if (next == curr) {
          tempSum = next;
          if (tempSum > sum) sum = tempSum;
      } else if (next < curr) {
          tempSum = next;
          if (tempSum > sum) sum = tempSum;
      }
  }
  return sum;
};

// my first version, which passed some but not all tests
var maxAscendingSum = function(nums) {
  let pointer1 = 0;
  let pointer2;
  let highest = 0;
  for (let i = 1; i < nums.length; i++) {
      if (nums[i] > nums[pointer1]) {
          pointer2 = i;
          let tempArr = nums.slice(pointer1, pointer2 + 1);
          let tempSum = tempArr.reduce((acc, current) => acc + current, 0);
          if (tempSum > highest) {
              highest = tempSum;
          }
      }
      if (nums[i] <= nums[pointer1]) {
          pointer1 = i;
      }
  }
  return (highest > 0 ? highest : Math.max(nums));
};

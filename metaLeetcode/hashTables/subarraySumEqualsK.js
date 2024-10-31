// Leetcode: 560. Subarray Sum Equals K
// URL: https://leetcode.com/problems/subarray-sum-equals-k/
// Difficulty: Medium
//
// Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.

// A subarray is a contiguous non-empty sequence of elements within an array.

// Example 1:
// Input: nums = [1,1,1], k = 2
// Output: 2

// Example 2:
// Input: nums = [1,2,3], k = 3
// Output: 2

/**
 * Counts the number of continuous subarrays that sum up to a target value k.
 * @param {number[]} nums - The input array of integers.
 * @param {number} k - The target sum for the subarrays.
 * @return {number} - The total count of subarrays that sum to k.
 */
var subarraySum = function (nums, k) {
  let count = 0; // Initialize the counter for subarrays that sum to k
  let sum = 0; // Initialize the cumulative sum
  let sumMap = new Map(); // Map to store the frequency of cumulative sums
  sumMap.set(0, 1); // Base case: a cumulative sum of 0 occurs once

  // Iterate through each number in the array
  for (let num of nums) {
    sum += num; // Update the cumulative sum

    // Check if there is a previous cumulative sum that, when subtracted from the current sum, equals k
    if (sumMap.has(sum - k)) {
      count += sumMap.get(sum - k); // Increment the count by the number of times (sum - k) has occurred
    }

    // Update the frequency of the current cumulative sum in the map
    sumMap.set(sum, (sumMap.get(sum) || 0) + 1);
  }

  return count; // Return the total count of valid subarrays
};

// version I submitted after studying above solution:
var subarraySum = function (nums, k) {
  let subCount = 0;
  let currentSum = 0;

  // create new Map of cumulativeSums
  let cumulativeSums = new Map();
  // initialize to have sum of 0(key) occur once(value)
  cumulativeSums.set(0, 1);

  // for loop through nums
  for (let num of nums) {
    // increment currentSum
    currentSum += num;

    // check to see if currentSum - k is already in cumulativeSums
    if (cumulativeSums.has(currentSum - k)) {
      subCount += cumulativeSums.get(currentSum - k);
    }

    // most likely this will create a new sum in the Map, set to 1
    cumulativeSums.set(currentSum, (cumulativeSums.get(currentSum) || 0) + 1);
  }
  return subCount;
};

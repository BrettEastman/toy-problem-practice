// Leetcode: 523. Continuous Subarray Sum
// Description: Given an integer array nums and an integer k, return true if nums has a continuous subarray of size at least two whose elements sum up to a multiple of k, or false otherwise. An integer x is a multiple of k if there exists an integer n such that x = n * k. 0 is always a multiple of k.
//

// The trick to this problem is to use the concept of remainders. We first need to create a running sum at each index, then calculate the remainder after dividing that idexes sum by k. If we have two running sums that produce the same remainder, then the sum of the elements between those two indices is divisible by k. This is because the difference between the two running sums is a multiple of k.
// This is the key insight that we will use to solve this problem.

// my second attempt, which is based on memorizing the solution below:
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function (nums, k) {
  // create a Map to hold the remainders
  let remaindersMap = new Map();
  // create a sum var set to zero
  let sum = 0;
  // initialize the Map to have the first key/val pair be remainer 0: index -1
  remaindersMap.set(0, -1);

  // for loop through nums
  for (let i = 0; i < nums.length; i++) {
    // add the value to sum
    sum += nums[i];
    // get remainder by modulo'ing k from sum
    let remainder = sum % k;
    // if Map doesn't already have the remaider
    if (!remaindersMap.has(remainder)) {
      // add it as the key and the value as the index
      remaindersMap.set(remainder, i);
      // otherwise if it does
    } else {
      // then that means the sum between these two indices is divisible by k
      // so, then check to make sure it is at least two items long
      // if so, then return true
      if (i - remaindersMap.get(remainder) >= 2) {
        return true;
      }
    }
  }
  return false;
};

// Official solution:
/**
 * Checks if the array has a continuous subarray of size at least two
 * that sums up to a multiple of k.
 *
 * @param {number[]} nums - The input array of integers.
 * @param {number} k - The integer to check the sum multiple against.
 * @return {boolean} - Returns true if such a subarray exists, otherwise false.
 */
var checkSubarraySum = function (nums, k) {
  // Initialize the sum and a map to store the first occurrence of remainders.
  let sum = 0;
  const remainderMap = new Map();
  remainderMap.set(0, -1); // Initialize the map with remainder 0 at index -1.

  // The purpose of this for loop is first to calulate the sums at each index and to place the remainder of the sum divided by k in the map. We only do this one time, which is why it is O(n). The trick we use to figure out if the sum is a multiple of k is to check if the remainder is the same as a previous remainder. If it is the same, then that means the numbers between the two indexes add up to k, which is what we want. See example below:
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]; // Increment the sum by the current element.

    // Calculate the remainder of the sum with respect to k.
    const remainder = sum % k;

    // Adjust remainder to be non-negative.
    const adjustedRemainder = remainder < 0 ? remainder + k : remainder;

    // If the remainder has been seen before.
    if (remainderMap.has(adjustedRemainder)) {
      // Check if the subarray length is at least 2.
      if (i - remainderMap.get(adjustedRemainder) > 1) {
        return true; // Valid subarray found.
      }
    } else {
      // Store the first occurrence of the remainder.
      remainderMap.set(adjustedRemainder, i);
    }
  }

  return false; // No valid subarray found.
};

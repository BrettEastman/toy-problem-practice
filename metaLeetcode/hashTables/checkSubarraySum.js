// Leetcode: 523. Continuous Subarray Sum
// Description: Given an integer array nums and an integer k, return true if nums has a continuous subarray of size at least two whose elements sum up to a multiple of k, or false otherwise. An integer x is a multiple of k if there exists an integer n such that x = n * k. 0 is always a multiple of k.
//

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

// my first attempt, which only passed 94/101 test cases
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function (nums, k) {
  for (let i = 0; i < nums.length; i++) {
    // create currentSub = [nums[i]]
    let currentSum = nums[i];
    // second for loop starting at i + 1
    for (let j = i + 1; j < nums.length; j++) {
      // add num to currentSum
      currentSum += nums[j];
      if (currentSum % k === 0) {
        return true;
      }
    }
  }
  return false;
};

// Example usage:
// const nums = [23, 2, 4, 6, 7];
// const k = 6;
// console.log(checkSubarraySum(nums, k)); // Output: true

// Let's use an example with nums = [23, 2, 4, 6, 7]

// 1. **Cumulative Sums and Remainders**:
//    - Cumulative sums: `[23, 25, 29, 35, 42]`
//    - Remainders when divided by [`k`]
//      - `23 % 6 = 5`
//      - `25 % 6 = 1`
//      - `29 % 6 = 5`
//      - `35 % 6 = 5`
//      - `42 % 6 = 0`

// 2. **Remainder Map**:
//    - We use a map to store the first occurrence of each remainder.
//    - Initially, the map is `{0: -1}` to handle cases where the subarray starts from the beginning.

// 3. **Iterating through the Array**:
//    - At index 0, cumulative sum is 23, remainder is 5. Map: `{0: -1, 5: 0}`
//    - At index 1, cumulative sum is 25, remainder is 1. Map: `{0: -1, 5: 0, 1: 1}`
//    - At index 2, cumulative sum is 29, remainder is 5. Map: `{0: -1, 5: 0, 1: 1}`

// ### Key Insight

// When we encounter the remainder 5 again at index 2, it means there is a previous cumulative sum (at index 0) that has the same remainder. This indicates that the sum of the elements between these two indices is a multiple of [`k`]

// ### Subarray Calculation

// - The cumulative sum at index 2 is 29.
// - The cumulative sum at index 0 is 23.
// - The difference between these sums is `29 - 23 = 6`, which is a multiple of [`k = 6`]

// So, the subarray `[2, 4]` (from index 1 to index 2) has a sum of 6, which is a multiple of 6.

// ### Correct Example

// Let's go through the correct example step-by-step:

// 1. **Initialization**:
//    - `sum = 0`
//    - `remainderMap = {0: -1}`

// 2. **Iteration**:
//    - Index 0: `sum = 23`, `remainder = 5`, `remainderMap = {0: -1, 5: 0}`
//    - Index 1: `sum = 25`, `remainder = 1`, `remainderMap = {0: -1, 5: 0, 1: 1}`
//    - Index 2: `sum = 29`, `remainder = 5`

// ### Key Check

// - At index 2, we find that the remainder 5 has been seen before at index 0.
// - The subarray between index 1 and index 2 is `[2, 4]`, and its sum is `6`, which is a multiple of `6`.

// ### Code Explanation

// ```javascript
// var checkSubarraySum = function (nums, k) {
//   let sum = 0;
//   const remainderMap = new Map();
//   remainderMap.set(0, -1); // Initialize the map with remainder 0 at index -1.

//   for (let i = 0; i < nums.length; i++) {
//     sum += nums[i]; // Increment the sum by the current element.
//     const remainder = sum % k;
//     const adjustedRemainder = remainder < 0 ? remainder + k : remainder;

//     if (remainderMap.has(adjustedRemainder)) {
//       if (i - remainderMap.get(adjustedRemainder) > 1) {
//         return true; // Valid subarray found.
//       }
//     } else {
//       remainderMap.set(adjustedRemainder, i);
//     }
//   }
//   return false; // No valid subarray found.
// };
// ```

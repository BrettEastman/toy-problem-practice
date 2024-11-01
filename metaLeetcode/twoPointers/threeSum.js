// Leetcode: 15. 3Sum
// URL: https://leetcode.com/problems/3sum/
// Difficulty: Medium
// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

// Example 1:
// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation:
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.

// Example 2:
// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.

// Example 3:
// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.

/**
 * Finds all unique triplets in the array which give the sum of zero.
 * @param {number[]} nums - The input array of integers.
 * @return {number[][]} - Array of triplets that sum up to zero.
 */
var threeSum = function (nums) {
  let result = []; // Initialize an array to store the resulting triplets

  // Sort the array in ascending order to facilitate the two-pointer approach and handle duplicates
  nums.sort((a, b) => a - b);

  // Iterate through the array, considering each number as a potential first element of a triplet
  for (let i = 0; i < nums.length - 2; i++) {
    // Skip duplicate elements to avoid duplicate triplets in the result
    if (i === 0 || (i > 0 && nums[i] !== nums[i - 1])) {
      let low = i + 1; // Initialize the left pointer just after the current element
      let high = nums.length - 1; // Initialize the right pointer at the end of the array
      let sum = 0 - nums[i]; // The target sum for the two pointers to find

      // Use a while loop to move the low and high pointers towards each other
      while (low < high) {
        if (nums[low] + nums[high] === sum) {
          // Found a triplet that sums to zero
          result.push([nums[i], nums[low], nums[high]]);

          // Move the low pointer to the next distinct element to avoid duplicates
          while (low < high && nums[low] === nums[low + 1]) low++;

          // Move the high pointer to the previous distinct element to avoid duplicates
          while (low < high && nums[high] === nums[high - 1]) high--;

          low++; // Move both pointers inward after finding a valid triplet
          high--;
        } else if (nums[low] + nums[high] < sum) {
          // If the sum is less than the target, move the low pointer to increase the sum
          low++;
        } else {
          // If the sum is greater than the target, move the high pointer to decrease the sum
          high--;
        }
      }
    }
  }

  return result; // Return all unique triplets that sum to zero
};

// my version:
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let result = [];
  nums.sort((a, b) => a - b);

  // we're going to iterate through sorted nums, avoiding duplicates, in the process creating three pointers - i, a low and a high. This is why we only iterate up until length - 2, we need those last two spots reserved for the final possible triplet array.
  for (let i = 0; i < nums.length - 2; i++) {
    if (i === 0 || (i > 0 && nums[i] !== nums[i - 1])) {
      let low = i + 1;
      let high = nums.length - 1;
      let currentDifference = 0 - nums[i];

      while (low < high) {
        if (nums[low] + nums[high] === currentDifference) {
          result.push([nums[i], nums[low], nums[high]]);
          while (low < high && nums[low] === nums[low + 1]) {
            low++;
          }
          while (low < high && nums[high] === nums[high - 1]) {
            high--;
          }
          low++;
          high--;
        } else if (nums[low] + nums[high] < currentDifference) {
          low++;
        } else {
          high--;
        }
      }
    }
  }
  return result;
};

// Leetcode 238. Product of Array Except Self
// Level: Medium

// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
// You must write an algorithm that runs in O(n) time and without using the division operation.

// Example 1:
// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]

// Example 2:
// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let left = new Array(nums.length).fill(1); // To store the product of all elements to the left of each index
  let right = new Array(nums.length).fill(1); // To store the product of all elements to the right of each index
  let result = new Array(nums.length).fill(1); // To store the final result

  // Populate the left array
  for (let i = 1; i < nums.length; i++) {
    left[i] = left[i - 1] * nums[i - 1];
  }

  // Populate the right array
  for (let i = nums.length - 2; i >= 0; i--) {
    right[i] = right[i + 1] * nums[i + 1];
  }

  // Calculate the result by multiplying corresponding left and right values
  for (let i = 0; i < nums.length; i++) {
    result[i] = left[i] * right[i];
  }

  return result; // Return the final array containing products except self
};

var productExceptSelf2 = function (nums) {
  let result = new Array(nums.length).fill(1);

  // Calculate left products and store in result
  // Example:
  // Suppose nums = [a, b, c, d].
  // For i = 1: result[1] = result[0] * nums[0] = 1 * a = a
  // For i = 2: result[2] = result[1] * nums[1] = a * b
  // For i = 3: result[3] = result[2] * nums[2] = a * b * c
  for (let i = 1; i < nums.length; i++) {
    result[i] = result[i - 1] * nums[i - 1];
  }
  // After completing the loop, the result array contains the product of all elements to the left of each index.
  // Continuing the Example:
  // result = [1, a, a * b, a * b * c]
  // This prepares one half of the necessary information to compute the final result.

  // This approach is akin to dynamic programming because it builds the solution incrementally using previously computed results.
  // Each result[i] is computed based on result[i - 1], leveraging the already calculated product up to that point.
  // Similarly, the right products are calculated in a way that reuses intermediate results, ensuring that each step depends on the results of previous steps.

  // Calculate the product of all elements to the right of each index on-the-fly and multiply with left products
  // The "rightProduct" is always holding the product of the nums moving right to left. Since there is nothing to the right of the last element, we need to start with 1.
  let rightProduct = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    // Here, result[i] is currently holding the product of everything to its left, so this calculation is saying, "multiply everything to the left of this index by everything to the right and replace result[i] with that product."
    result[i] = result[i] * rightProduct;
    rightProduct *= nums[i];
  }

  return result;
};

let nums = [2, 3, 4, 5];
console.log(productExceptSelf2(nums));

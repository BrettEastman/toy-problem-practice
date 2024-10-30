// Leetcode: 670. Maximum Swap
// URL: https://leetcode.com/problems/maximum-swap/
// Difficulty: Medium
//
// You are given an integer num. You can swap two digits at most once to get the maximum valued number.

// Return the maximum valued number you can get.

// Example 1:
// Input: num = 2736
// Output: 7236
// Explanation: Swap the number 2 and the number 7.

// Example 2:
// Input: num = 9973
// Output: 9973
// Explanation: No swap.

/**
 * Finds the maximum number possible by swapping two digits at most once.
 * @param {number} num - The original number.
 * @return {number} - The maximum number after at most one swap.
 */
var maximumSwap = function (num) {
  // Convert the number to an array of its digits as strings.
  let numArr = num.toString().split("");

  // Initialize an array to store the last index of each digit (0-9).
  let lastIdx = new Array(10).fill(-1);

  // Record the last occurrence index for each digit in numArr.
  for (let i = 0; i < numArr.length; i++) {
    lastIdx[numArr[i]] = i;
  }

  // Iterate through each digit to find the first digit that can be swapped.
  for (let i = 0; i < numArr.length; i++) {
    // Check from the highest digit (9) down to one greater than the current digit.
    for (let j = 9; j > numArr[i]; j--) {
      // If a higher digit exists later in the number, perform the swap.
      if (lastIdx[j] > i) {
        // Swap the current digit with the last occurrence of the higher digit.
        [numArr[i], numArr[lastIdx[j]]] = [numArr[lastIdx[j]], numArr[i]];
        // Return the new number after the swap.
        return parseInt(numArr.join(""), 10);
      }
    }
  }

  // If no swap can increase the number, return the original number.
  return num;
};

// my version based on the above:
/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function (num) {
  let numArr = num.toString().split("");
  // create a lastIndices array to represent the 10 digits by index number, but fill with all -1's. Each item will eventually represent the index number of the digit, as it is in the numArr
  let lastIndices = new Array(10).fill(-1);
  // for loop through the numArr to place the indices of each digit in its rightful spot in the lastIndices arr
  for (let i = 0; i < numArr.length; i++) {
    // if the numArr index of the current digit is greater than the lastIndices item located on the digit's index
    let currentDigit = numArr[i];
    lastIndices[currentDigit] = i;
  }

  // A 2nd for loop through numArr
  for (let j = 0; j < numArr.length; j++) {
    // also a nested reverse for loop through lastIndices
    for (let k = 9; k > numArr[j]; k--) {
      // if a higher digit occurs later in the number, as noted by the item at the digit's index
      if (lastIndices[k] > j) {
        // then we can swap the current digit with the last occurance of the higher digit (the item will be the index)
        [numArr[j], numArr[lastIndices[k]]] = [
          numArr[lastIndices[k]],
          numArr[j],
        ];
        return Number.parseInt(numArr.join(""));
      }
    }
  }
  // if nothing was ever returned, then go ahead and return the original number
  return num;
};

let exampleNum = 2736;
console.log(maximumSwap(exampleNum)); // Output: 7236

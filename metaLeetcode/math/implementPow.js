// Leetcode 50. Pow(x, n)
// URL: https://leetcode.com/problems/powx-n/
// Difficulty: Medium
//
// Implement pow(x, n), which calculates x raised to the power n (i.e., xn).
// Example 1:
// Input: x = 2.00000, n = 10
// Output: 1024.00000

// Example 2:
// Input: x = 2.10000, n = 3
// Output: 9.26100

// Example 3:
// Input: x = 2.00000, n = -2
// Output: 0.25000
// Explanation: 2**-2 = 1/2**2 = 1/4 = 0.25

/**
 * Calculates x raised to the power n using a recursive approach.
 * @param {number} x - The base number.
 * @param {number} n - The exponent.
 * @return {number} - The result of x raised to the power n.
 */
var myPow = function (x, n) {
  // Base case: any number raised to the power of 0 is 1
  if (n === 0) return 1;

  // If the exponent is negative, invert the base and make the exponent positive
  if (n < 0) {
    x = 1 / x;
    n = -n;
  }

  // Recursive case:
  // If the exponent is even, square the base and halve the exponent
  // This reduces the number of multiplications needed
  if (n % 2 === 0) {
    return myPow(x * x, n / 2);
  } else {
    // If the exponent is odd, reduce it by 1 to make it even, then proceed
    // Multiply the result by x to account for the reduced exponent
    return x * myPow(x * x, Math.floor(n / 2));
  }
};

let exampleX = 2;
let exampleN = -2;
console.log(myPow(exampleX, exampleN));

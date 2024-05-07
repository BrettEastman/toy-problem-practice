// Main number of coins for change

// Given an array of positive integers representing coin denominations, and a single non-negative integer n representing a target amount of money, write a function that returns the smallest number of coins needed to make change for (to sum up to) that amount, using the given coin denominations.

// Note that you have access to an unlimited amount of coins. In other words, if the denominations are [1,5,10], you have access to an unlimited amount of 1s, 5s, and 10s.

// If it is impossible to make change for the target amount, return -1.

// Algoexpert solution
function minNumberOfCoinsForChange(n, denoms) {
  // Create an array to store the minimum number of coins needed for each amount
  // from 0 to n. Initialize all values to Infinity (except for 0).
  const numOfCoins = new Array(n + 1).fill(Infinity);
  numOfCoins[0] = 0;

  // Iterate through each denomination
  for (const denom of denoms) {
    // Iterate through each amount from 0 to n
    for (let i = 0; i < numOfCoins.length; i++) {
      // If the current denomination is less than or equal to the current amount
      if (denom <= i) {
        // Update the minimum number of coins needed for the current amount
        // by taking the minimum of the current value and the value for the
        // remaining amount (i - denom) plus 1 coin of the current denomination
        numOfCoins[i] = Math.min(numOfCoins[i], numOfCoins[i - denom] + 1);
      }
    }
  }

  // If the minimum number of coins needed for n is not Infinity,
  // return that value. Otherwise, return -1 (indicating that it's not possible
  // to make change for n using the given denominations).
  return numOfCoins[n] !== Infinity ? numOfCoins[n] : -1;
}

let denominations = [1, 5, 10];
console.log(minNumberOfCoinsForChange(14, denominations));

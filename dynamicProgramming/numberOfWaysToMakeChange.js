// Given an array of distinct positive integers, representing coin denominations, and a single non-negative integer in representing a target amount of money, write a function that returns the number of ways to make change for that target amount using the given coin denominations.

// Note that an unlimited amount of coins is at your disposal

function numberOfWaysToMakeChange(n, denoms) {
  // we are going to store the number of ways to make change for each amount of money
  // each index of ways represents an amount of money
  let ways = new Array(n + 1).fill(0);
  ways[0] = 1;

  // for each denomination, we are going to iterate through the ways array and update the number of ways to make change for each amount of money by adding the current number of ways to the number of ways of the amount minus the denomination
  for (let denom of denoms) {
    for (let i = 1; i < ways.length; i++) {
      if (denom <= i) {
        ways[i] += ways[i - denom];
      }
    }
  }
  return ways[n];
}

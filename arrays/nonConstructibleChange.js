// Non-constructible change

// Given an array of positive integers, representing the values of coins in your possession, write a function that returns the minimum amount of change, (the minimum sum of money ) that you cannot create. The given coins can have any positive integer or value and aren’t necessarily unique i.e. you can have multiple coins of the same value.

// For example, if you’re given coins equals 1 to 5 the minimum amount of change you can’t create is 4. If you’re given no coins, the minimum amount of change that you can’t create is 1.

function nonConstructibleChange(array) {
  let sorted = array.sort((a, b) => a - b);
  let currentChange = 0;
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] > currentChange + 1) {
      return currentChange + 1;
    }
    currentChange += sorted[i];
  }
  return currentChange + 1;
}

let coins = [5, 7, 1, 1, 2, 3, 22];

console.log(nonConstructibleChange(coins));

// The way it works is that the next number in the sorted array cannot be greater than the sum of all the previous numbers + 1. If that is the case, then the answer is the sum of all the previous + 1

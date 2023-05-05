// Algoexpert
// Given an array of positive integers representing the values of coins in your possession, write a function that returns the minimum amount of change (the minimum sum of money) that you cannot creat. The given coins can have any positive integer value and aren't necessarily unique (i.e. you can have multiple coins of the same value).

// // my first incorrect attempt:
// function nonConstructibleChange(coins) {
//   // if no change, return 1
//   if (!coins) {
//     return 1;
//   }
//   // sort input array
//   coins.sort((a, b) => a - b);
//   let obj = {};
//   for (let i = 0; i < coins.length; i++) {
//     if (obj[coins[i]] === undefined) {
//       obj[coins[i]] = true;
//     }
//     let currentSum = coins[i];
//     for (let j = i; j < coins.length; j++) {
//       currentSum += coins[j];
//       if (obj[currentSum] === undefined) {
//         obj[currentSum] = true;
//       }
//       console.log('currentSum: ', currentSum)
//     }
//     let currentKeys = Object.keys(obj);
//     if (currentKeys[i] - currentKeys[i - 1] !== 1) {
//       return currentKeys[i] + 1;
//     }
//   }
//   return 1;
// }

// algoexpert solution:
function nonConstructibleChange(coins) {
  coins.sort((a, b) => a - b);
  let currentChangeCreated = 0;
  for (const coin of coins) {
    if (coin > currentChangeCreated + 1) {
      return currentChangeCreated;
    }
    currentChangeCreated += coin;
  }
  return currentChangeCreated + 1;
}

console.log(nonConstructibleChange([5,7,1,1,2,3,22]));
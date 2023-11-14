// Smallest difference,

// Write a function that takes in two non-empty arrays of integers, finds the pair of numbers, (one from each array), whose absolute difference is closest to zero, and returns in array containing these two numbers, with the number from the first array in the first position.

// Note that the absolute difference of two integers is the distance between them on the real number line. For example, the absolute difference of -5 and 5 is 10, and the absolute difference of -5 and -4 is 1.

// You can assume that there will only be one pair of numbers with the smallest difference.

function smallestDifference(arrayOne, arrayTwo) {
  // create lowestDiff set to Max safe integer
  let lowestDiff = Number.MAX_SAFE_INTEGER;
  // create result arr set to [0, 0]
  let result = [0, 0];

  // for loop through arrayOne
  for (let i = 0; i < arrayOne.length; i++) {
    // for loop through arrayTwo
    for (let j = 0; j < arrayTwo.length; j++) {
      // currentDiff = Math.abs(arrayOne[i] - arrayTwo[j]
      let currentDiff = Math.abs(arrayOne[i] - arrayTwo[j]);
      // if currentDiff is less than lowestDiff)
      if (currentDiff < lowestDiff) {
        // lowestDiff = currentDiff
        lowestDiff = currentDiff;
        // result[0] is first value
        result[0] = arrayOne[i];
        // result[1] is second value
        result[1] = arrayTwo[j];
      }
    }
  }
  return result;
}

// Three number sum

// Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. The function should find all triplets in the array that sum up to the target sum and return a two dimensional array of all these triplets. The number in each triplet should be ordered in ascending order, and the triplets themselves should be ordered in ascending order with respect to the numbers they hold.

// If no three numbers come up to the target sum, the function should return an empty array
function threeNumberSum(array, targetSum) {
  const sorted = array.sort((a, b) => a - b);
  let result = [];

  for (let i = 0; i < sorted.length; i++) {
    const currentOne = sorted[i];

    for (let j = i + 1; j < sorted.length; j++) {
      const currentTwo = sorted[j];

      for (let k = j + 1; k < sorted.length; k++) {
        const currentThree = sorted[k];

        let tripletSum = currentOne + currentTwo + currentThree;

        if (tripletSum === targetSum) {
          let currentTriplet = [currentOne, currentTwo, currentThree];
          result.push(currentTriplet);
        }
      }
    }
  }

  return result;
}

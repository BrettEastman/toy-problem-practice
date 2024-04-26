// Longest peak.

// Write a function that takes in an array of integers and returns the length of the longest peak in the array.

// The peak is defined as adjacent integers in the array that are strictly increasing until they reach a tip, the highest value of peak, at which point they become strictly decreasing. At least three integers are required to form a peak.

// For example, the integers one for 10 two form a peak, but the integers for zero 10 don’t and neither do the integers 1220. Similarly, the integer is 123 don’t form a peak because there aren’t any strict decreasing integers after the three.

// my version 4/26/24
function longestPeak(array) {
  let longest = 0;
  let increaseDecrease = 0;
  let startIndex = 0;
  let currentLongest = 0;

  for (let i = 1; i < array.length; i++) {
    if (array[i] === array[i - 1]) {
      increaseDecrease = 0;
      startIndex = i;
      currentLongest = 0;
      continue;
    }
    if (array[i] > array[i - 1] && increaseDecrease === 1) {
      continue;
    }
    if (array[i] > array[i - 1] && increaseDecrease === 0) {
      increaseDecrease = 1;
      startIndex = i - 1;
    }
    if (array[i] < array[i - 1] && increaseDecrease === 2) {
      currentLongest = i + 1 - startIndex;
      if (currentLongest > longest) {
        longest = currentLongest;
      }
    }

    if (array[i] < array[i - 1] && increaseDecrease === 1) {
      increaseDecrease = 2;
      currentLongest = i + 1 - startIndex;
      if (currentLongest > longest) {
        longest = currentLongest;
      }
    }
    if (array[i] > array[i - 1] && increaseDecrease === 2) {
      increaseDecrease = 1;
      startIndex = i - 1;
    }
  }

  return longest;
}

let input = [1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3];

console.log(longestPeak(input));

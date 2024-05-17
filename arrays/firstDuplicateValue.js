// Given an array of integeres bewteen 1 and n, where n is the length of the array, write a function that returns the first integer that appears more than once (when the array is read from left to right).
// In other words, out of all the integers that might occur more than once in the input array, your function should return the one whose first duplicate value has the minimum index.
// If no integer appears more than once, your function should return -1.
// Note that you're allowed to mutate the input array.

function firstDuplicateValue(array) {
  let duplicateWithMinIndex;
  let minIndex = Infinity;

  for (let i = 0; i < array.length; i++) {
    let current = array[i];
    for (let j = i + 1; j < array.length; j++) {
      let duplicate = array[j];
      if (current === duplicate && j < minIndex) {
        duplicateWithMinIndex = current;
        minIndex = j;
      }
    }
  }
  if (minIndex === Infinity) {
    return -1;
  } else {
    return duplicateWithMinIndex;
  }
}

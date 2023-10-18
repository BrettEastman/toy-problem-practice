// Insertion sort, pseudo code
// Start by picking the second element in the array
// Now compare the second element with the one before it and swap if necessary
// Continue to the next element, and if it is in the incorrect order, iterate through the sorted portion (i.e. the left side) to place the element in the correct place
// Repeat, until the array sorted

// my version from algoexpert attempt(best version):
function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let j = i;
    while (j > 0 && array[j] < array[j - 1]) {
      [array[j - 1], array[j]] = [array[j], array[j - 1]];
      j--;
    }
  }
  return array;
}

// Colt Steele version:
// note that we have to use var rather than let or const so we can access j outside of the for loop, but also reassign it when needed
function insertionSort(arr) {
  for (var i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
    // console.log(arr)
  }
  return arr;
}

console.log(insertionSort([2, 1, 9, 76, 4]));

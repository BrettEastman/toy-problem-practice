// Selection sort is an in-place comparison sorting algorithm. It has an O(n²) time complexity, which makes it inefficient on large lists. However, it has performance advantages over more complicated algorithms in certain situations, particularly where auxiliary memory is limited.
// Selection sort is based on the concept of doing a significant number of comparisons before moving each element directly to its eventual sorted resting place. It repeatedly chooses the smallest element, and puts it in the right place.

// The algorithm divides the input list into two parts: a sorted sublist of items which is built up from left to right at the front (left) of the list and a sublist of the remaining unsorted items that occupy the rest of the list. Initially, the sorted sublist is empty and the unsorted sublist is the entire input list. The algorithm proceeds by finding the smallest (or largest, depending on sorting order) element in the unsorted sublist, exchanging (swapping) it with the leftmost unsorted element (putting it in sorted order), and moving the sublist boundaries one element to the right.

// Colt Steele version
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    // Store the first element index as the smallest value you’ve seen so far.
    let lowest = i;
    // Compare this item to the next item in the array until you find a smaller number.
    for (let j = i + 1; j < arr.length; j++) {
      // If a smaller number is found, designate that smaller number to be the new minimum and continue until the end of the array.
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    // If the minimum is not the value you initially began with, swap the two values.
    if (i !== lowest) {
      [arr[i], arr[lowest]] = [arr[lowest], arr[i]];
    }
    // Repeat this with the rest of the original for loop until the array is sorted.
  }
  return arr;
}

const arr1 = [5, 7, 30, 3, 0, 24, 6, 9, 4];

// console.log(selectionSort(arr1));

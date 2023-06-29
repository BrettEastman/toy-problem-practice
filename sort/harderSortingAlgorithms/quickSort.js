// helper function for quickSort:
function pivot(arr, start = 0, end = arr.length - 1) {
  let pivot = arr[start];
  let currentPivotIndex = start;
  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      currentPivotIndex++;
      [arr[currentPivotIndex], arr[i]] = [arr[i], arr[currentPivotIndex]];
    }
  }
  [arr[start], arr[currentPivotIndex]] = [arr[currentPivotIndex], arr[start]];
  return currentPivotIndex;
}

let array1 = [4,8,2,1,5,7,6,3];

// Order of swaps:
// first time: [4,8,2,1,5,7,6,3]
// then: [4,2,8,1,5,7,6,3]
// then: [4,2,1,8,5,7,6,3]
// then: [4,2,1,3,5,7,6,8]

// then the last thing we have to do is swap 3 and 4 so 4 will be in the correct position: [3,2,1,4,5,7,6,8]
// You can see that all of the numbers to the left of 4 are smaller than 4 and all of the numbers to the right of 4 are larger than 4. This is the goal of the pivot function.

function quickSort(array, left, right) {
  if (left < right) {
    let pivotIndex = pivot(array, left, right);
    // left
    quickSort(array, left, pivotIndex - 1);
    // right
    quickSort(array, pivotIndex + 1, right);
  }
  return array;
}

console.log(quickSort(array1, 0, array1.length - 1));
// [1,2,3,4,5,6,7,8]
// Time complexity: O(n log n) best and average case, O(n^2) worst case
// Space complexity: O(log n) best and average case, O(n) worst case

// Bubble sort, pseudo code
// Start looping From the end of the array towards the beginning
// Start an inner loop with a variable called j from the beginning until i - 1
// If arr[j] is greater than arr[j + 1], swap those two values
// Return the sorted array

// my made up example by memory 6-9-23
function bubbleSort(arr) {
  for (let i = arr.length - 1; i >=0; i--) {
    for (let j = 0; j <= i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }
  return arr;
}

const arr1 = [5,7,30,3,0,24,6,9,4];

console.log(bubbleSort(arr1));
// [ 0, 3, 4, 5, 6, 7, 9, 24, 30 ]

// Merge sort, pseudocode
// Break up the array into halves, until you have arrays that are empty or have one element
// Once you have smaller sorted arrays, merge those arrays with other sorted arrays until you’re back at the full length of the array
// Once the array has been merged back together, return the merged and sorted array

function merge(arr1, arr2) {
  const result = [];
  let i = 0;
  let j = 0;
  while(i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      result.push(arr1[i]);
      i++
    } else {
      result.push(arr2[j]);
      j++
    }
  }
  while(i < arr1.length) {
    result.push(arr1[i]);
    i++
  }
  while(j < arr2.length) {
    result.push(arr2[j]);
    j++
  }
  return result;
}

function mergeSort(arr) {
  if(arr.length <= 1) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

let array1 = [4, 15, 40, 2, 13, 37];

console.log(mergeSort(array1));
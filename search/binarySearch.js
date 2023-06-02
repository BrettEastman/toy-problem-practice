// Write a function called binarySearch which accepts a sorted array and a value and returns the index at which the value exists. Otherwise, return -1.

// This algorithm should be more efficient than linearSearch - you can read how to implement it here - https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search and here - https://www.topcoder.com/community/data-science/data-science-tutorials/binary-search/

// my solution 6/2/23
function binarySearch(arr, target){
  let start = 0;
  let end = arr.length;
  while (start < end) {
      let mid = Math.floor((start + end) / 2);
      if (arr[mid] === target) {
          return mid;
      } else if (arr[mid] > target) {
          end = mid;
      } else if (arr[mid] < target) {
          start = mid + 1;
      }
  }
  return -1;
}

// Julie's solution:
function binarySearch(array, target){
  let start = 0;
  let end = array.length - 1;

  while (start <= end) {
    const middle = Math.floor((end - start) / 2) + start;
    if (array[middle] === target) {
      return middle;
    }
    if (array[middle] > target) {
      end = middle - 1;
    } else if (array[middle] < target) {
      start = middle + 1;
    }
  }

  return -1;
}

console.log(binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 95)) // 16
console.log(binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 100)) // -1
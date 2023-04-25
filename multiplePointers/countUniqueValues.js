// countUniqueValues accepts a sorted array, an count the unique values in the array. There can be negaitve numbers in the array, but it will always be sorted.

// no rule that says you can't alter the input array

// my solution:
function countUniqueValues(array){
  let left = 0;
  let right = 1;
  while (right <= array.length) {
      if (array[right] === array[left]) {
          right++;
      } else {
          left++;
          array[left] = array[right];
      }
  }
  return left;
}

// Colt Steele solution:
function countUniqueValues(arr){
  if (arr.length === 0) {
    return 0;
  }
  var i = 0;
  for (var j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

console.log(countUniqueValues([1,1,1,1,1,2])); // 2
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])); // 7
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([-2,-1,-1,0,1])); // 4
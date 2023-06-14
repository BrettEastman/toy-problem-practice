
// Colt Steele version:
// note that we have to use var rather than let or const so we can access j outside of the for loop, but also reassign it when needed
function insertionSort(arr) {
  for (var i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j]
    }
    arr[j + 1] = currentVal;
    // console.log(arr)
  }
  return arr;
}

console.log(insertionSort([2,1,9,76,4]));

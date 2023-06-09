
// my made up example by memory 6-9-23
function bubbleSort(arr) {
  for (let i = arr.length - 1; i >=0; i--) {
    for (let j = 0; j <= i; j++) {
      if (arr[j] - arr[j + 1] > 0) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }
  return arr;
}


const arr1 = [5,7,30,3,0,24,6,9,4];

console.log(bubbleSort(arr1));
// just the merge helper function
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

let array1 = [2, 13, 37];
let array2 = [4, 15, 40];

console.log(merge(array1, array2))
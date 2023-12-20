// A left rotation operation on an array shifts each of the array's elements 1 unit to the left. For example, if 2 left rotations are performed on array [1,2,3,4,5], then the array would become [3,4,5,1,2]. Note that the lowest index item moves to the highest index in a rotation. This is called a circular array.

// Given an array a of n integers and a number, d, perform d left rotations on the array. Return the updated array to be printed as a single line of space-separated integers.

// rotLeft has the following parameter(s):

// int a[n]: the array to rotate
// int d: the number of rotations
// Returns
// int a'[n]: the rotated array

// my solution using Array.from
function rotLeft(a, d) {
  let length = a.length;
  let newIndices = Array.from(a, (val, index) => [val, index - d]);
  let result = Array.from({ length: length });
  for (let i = 0; i < length; i++) {
    let currentVal = newIndices[i][0];
    let currentInd = newIndices[i][1];
    if (currentInd >= 0) {
      result[currentInd] = currentVal;
    } else {
      currentInd = currentInd + length;
      result[currentInd] = currentVal;
    }
  }
  return result;
}

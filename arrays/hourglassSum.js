// An hourglass in  is a subset of values with indices falling in this pattern in 's graphical representation:

// a b c
//   d
// e f g
// There are 16 hourglasses in arr. An hourglass sum is the sum of an hourglass' values. Calculate the hourglass sum for every hourglass in arr, then print the maximum hourglass sum. The array will always be 6x6.

// my solution which is correct:
function hourglassSum(arr) {
  // create sums arr
  let sums = [];
  // for loop: traverse the arr of arrs, from 0 to 3 (only traversing the first four rows)
  for (let i = 0; i < 4; i++) {
    // create row1, row2, row3 (1st, 2nd and 3rd arrs)
    let row1 = arr[i];
    let row2 = arr[i + 1];
    let row3 = arr[i + 2];
    // for loop: traverse row1 from 1 to arr.length - 1
    for (let j = 1; j < 5; j++) {
      // create currentCount
      let currentSum =
        row1[j - 1] +
        row1[j] +
        row1[j + 1] +
        row2[j] +
        row3[j - 1] +
        row3[j] +
        row3[j + 1];
      sums.push(currentSum);
    }
  }
  return Math.max(...sums);
}

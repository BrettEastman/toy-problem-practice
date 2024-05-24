// Write a function that takes in a non-empty array of arbitrary intervals, merges any overlapping intervals, and returns the new intervals in no particular order.
// Each interval is an array of two integers, with interval[0] as the start of the interval and interval[1] as the end of the interval.
// Note that back-to-back intervals aren't considered to be overlapping. For example, [1, 5] and [6, 7] aren't overlapping.
// However, two intervals like [1, 6] and [6, 7] are overlapping.
// Also note that the start of any particular interval will always be less than or equal to the end of that interval.

// my solution:
function mergeOverlappingIntervals(array) {
  let resIndex = 0;
  let sortedArr = array.sort((a, b) => a[0] - b[0]);
  let result = [sortedArr[0]];

  for (let i = 1; i < sortedArr.length; i++) {
    let prev = result[resIndex];
    let current = sortedArr[i];
    if (prev[1] >= current[1]) {
      continue;
    }
    if (prev[1] >= current[0]) {
      let newInterval = [prev[0], current[1]];
      result[resIndex] = newInterval;
    } else {
      result.push(current);
      resIndex++;
    }
  }
  return result;
}

let test = [
  [-20, 30],
  [1, 22],
];

console.log(mergeOverlappingIntervals(test));

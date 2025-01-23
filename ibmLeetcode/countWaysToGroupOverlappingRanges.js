// Leetcode 2580. Count Ways to Group Overlapping Ranges
// Level: Medium
//
// You are given a 2D integer array ranges where ranges[i] = [starti, endi] denotes that all integers between starti and endi (both inclusive) are contained in the ith range.
// You are to split ranges into two (possibly empty) groups such that:
// Each range belongs to exactly one group.
// Any two overlapping ranges must belong to the same group.
// Two ranges are said to be overlapping if there exists at least one integer that is present in both ranges.
// For example, [1, 3] and [2, 5] are overlapping because 2 and 3 occur in both ranges.
// Return the total number of ways to split ranges into two groups. Since the answer may be very large, return it modulo 109 + 7.

// Example 1:
// Input: ranges = [[6,10],[5,15]]
// Output: 2
// Explanation:
// The two ranges are overlapping, so they must be in the same group.
// Thus, there are two possible ways:
// - Put both the ranges together in group 1.
// - Put both the ranges together in group 2.

// Example 2:
// Input: ranges = [[1,3],[10,20],[2,5],[4,8]]
// Output: 4
// Explanation:
// Ranges [1,3], and [2,5] are overlapping. So, they must be in the same group.
// Again, ranges [2,5] and [4,8] are also overlapping. So, they must also be in the same group.
// Thus, there are four possible ways to group them:
// - All the ranges in group 1.
// - All the ranges in group 2.
// - Ranges [1,3], [2,5], and [4,8] in group 1 and [10,20] in group 2.
// - Ranges [1,3], [2,5], and [4,8] in group 2 and [10,20] in group 1.

/**
 * @param {number[][]} ranges
 * @return {number}
 */
var countWays = function (ranges) {
  // All we want to do is to group the overlapping ranges together and produce an array with the non-overlapping ranges. Then, this whole grouping concept is really just a fancy way of saying we need to calculate 2 to the nth power, where n is the number of non-overlapping groups after merging, i.e. the length of the result array.
  // Why 2^n? Because for each group, we can either include it or exclude it in the final grouping. So, for n groups, we have 2^n possible ways to group them.
  // 3 Groups: 2 × 2 × 2 = 8 ways.
  // 4 Groups: 2 × 2 × 2 × 2 = 16 ways.
  // And so on...
  // But the instructions say we need to limit each number of groupings (with large numbers) to 10 to the 9th power + 7, so we define a large prime number for modulo operations to prevent integer overflow
  let mod = Math.pow(10, 9) + 7;

  // Sort the ranges based on their starting points in ascending order
  ranges.sort((r1, r2) => r1[0] - r2[0]);

  // Initialize the result array with the first range as the starting point
  let res = [ranges[0]];

  // Iterate through each range in the sorted list. This will be the main loop to merge overlapping ranges.
  for (let next of ranges) {
    // Get the last range in the result array to compare with the current range
    let prev = res[res.length - 1];

    // Check if the current range overlaps with the previous range
    if (prev[1] >= next[0]) {
      // If overlapping, merge the current range with the previous by updating the end
      prev[1] = Math.max(prev[1], next[1]);
    } else {
      // If not overlapping, add the current range to the result array as a new group
      res.push(next);
    }
  }

  // The number of non-overlapping groups after merging
  let n = res.length;

  // Initialize the sum to 1, which will hold the total number of ways
  let sum = 1;

  // Calculate 2^n using iterative multiplication to determine all possible groupings
  for (let i = 1; i <= n; i++) {
    sum = (sum * 2) % mod;
    // Multiply by 2 for each group to account for including or excluding it
    // Apply modulo to keep the number within integer limits
  }

  // Return the total number of ways to group the overlapping ranges
  return sum;
};

let exampleRanges = [
  [1, 3],
  [10, 20],
  [2, 5],
  [4, 8],
];
console.log(countWays(exampleRanges)); // Output: 4

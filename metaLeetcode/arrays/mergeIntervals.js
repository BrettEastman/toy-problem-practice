// Leetcode: 56. Merge Intervals
// URL: https://leetcode.com/problems/merge-intervals/
// Difficulty: Medium

// Given an array of intervals where intervals[i] = [start, end], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

// Example 1:
// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].

// Example 2:
// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.

// My 2nd attempt, based on the solution below:
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  let result = [intervals[0]];
  for (let i = 1; i < intervals.length; i++) {
    let last = result[result.length - 1];
    let current = intervals[i];

    if (current[0] <= last[1]) {
      result[result.length - 1] = [last[0], Math.max(last[1], current[1])];
    } else {
      result.push(current);
    }
  }
  return result;
};

// A.I. solution:
var merge2 = function (intervals) {
  if (!intervals.length) return [];

  intervals.sort((a, b) => a[0] - b[0]);

  const merged = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    const current = intervals[i];
    const last = merged[merged.length - 1];

    if (current[0] <= last[1]) {
      merged[merged.length - 1] = [last[0], Math.max(last[1], current[1])];
    } else {
      merged.push(current);
    }
  }

  return merged;
};

let exampleIntervals = [
  [1, 4],
  [2, 3],
];
console.log(merge2(exampleIntervals)); // [[1,4]]

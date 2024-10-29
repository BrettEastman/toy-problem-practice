// Leetcode 986. Interval List Intersections
// URL: https://leetcode.com/problems/interval-list-intersections/
// Difficulty: Medium
//
// You are given two lists of closed intervals, firstList and secondList, where firstList[i] = [starti, endi] and secondList[j] = [startj, endj]. Each list of intervals is pairwise disjoint and in sorted order.

// Return the intersection of these two interval lists.

// A closed interval [a, b] (with a <= b) denotes the set of real numbers x with a <= x <= b.

// The intersection of two closed intervals is a set of real numbers that are either empty or represented as a closed interval. For example, the intersection of [1, 3] and [2, 4] is [2, 3].

// Example 1:
// Input:
// firstList =  [[0,2],[5,10],[13,23],[24,25]]
// secondList = [[1,5],[8,12],[15,24],[25,26]]
// Output:      [[1,2],[5,5],[8,10],[15,23],[24,24],[25,25]]

/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function (firstList, secondList) {
  let i = 0; // Pointer for firstList
  let j = 0; // Pointer for secondList
  let result = []; // Array to store the intersection intervals

  // Iterate through both lists until one list is exhausted
  while (i < firstList.length && j < secondList.length) {
    let first = firstList[i]; // Current interval from firstList
    let second = secondList[j]; // Current interval from secondList

    // Determine the start and end of the overlapping interval
    let start = Math.max(first[0], second[0]); // Later start time
    let end = Math.min(first[1], second[1]); // Earlier end time

    // If the intervals overlap, add the intersection to the result
    if (start <= end) {
      result.push([start, end]);
    }

    // Move the pointer that has the smaller end time
    // This is because the interval with the smaller end cannot overlap with any future intervals
    if (first[1] < second[1]) {
      i++;
    } else if (first[1] > second[1]) {
      j++;
    } else {
      // If both ends are equal, move both pointers
      i++;
      j++;
    }
  }

  return result; // Return all the intersection intervals
};

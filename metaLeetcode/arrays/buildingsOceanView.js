// Leetcode 1762. Buildings With an Ocean View
// URL: https://leetcode.com/problems/buildings-with-an-ocean-view/
// Difficulty: Medium
//
// There are n buildings in a line. You are given an integer array heights of size n that represents the heights of the buildings in the line.

// The ocean is to the right of the buildings. A building has an ocean view if the building can see the ocean without obstructions. Formally, a building has an ocean view if all the buildings to its right have a smaller height.

// Return a list of indices (0-indexed) of buildings that have an ocean view, sorted in increasing order.

// Example 1:
// Input: heights = [4,2,3,1]
// Output: [0,2,3]
// Explanation: Building 1 (0-indexed) does not have an ocean view because building 2 is taller.

// Example 2:
// Input: heights = [4,3,2,1]
// Output: [0,1,2,3]
// Explanation: All the buildings have an ocean view.

// Example 3:
// Input: heights = [1,3,2,4]
// Output: [3]
// Explanation: Only building 3 has an ocean view.

/**
 * @param {number[]} heights
 * @return {number[]}
 */
var findBuildings = function (heights) {
  let oceanView = [];
  let max = 0;
  for (let i = heights.length - 1; i >= 0; i--) {
    if (heights[i] > max) {
      oceanView.unshift(i);
      max = heights[i];
    }
  }
  return oceanView;
};

// my version:
/**
 * @param {number[]} heights
 * @return {number[]}
 */
var findBuildings = function (heights) {
  let maxHeight = heights[heights.length - 1];
  let result = [heights.length - 1];
  // reverse for loop through heights starting with 2nd to last item
  for (let i = heights.length - 2; i >= 0; i--) {
    let currentHeight = heights[i];
    // if currentHeight is greater than maxHeight
    if (currentHeight > maxHeight) {
      // make maxHeight current height
      maxHeight = currentHeight;
      // unshift height to front of result
      result.unshift(i);
    }
  }
  return result;
};

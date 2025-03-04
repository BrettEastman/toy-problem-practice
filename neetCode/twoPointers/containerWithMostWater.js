// Leetcode 11. Container With Most Water
// Level: Medium
//
// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
// Find two lines that together with the x-axis form a container, such that the container contains the most water.
// Return the maximum amount of water a container can store.
// Notice that you may not slant the container.

// my solution, which is correct
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let startIndex = 0;
  let endIndex = height.length - 1;
  let currentHeight;
  let currentLength;
  let currentMaxArea = 0;

  while (startIndex < endIndex) {
    currentHeight = Math.min(height[startIndex], height[endIndex]);
    currentLength = endIndex - startIndex;
    if (currentHeight * currentLength > currentMaxArea) {
      currentMaxArea = currentHeight * currentLength;
    }
    if (height[startIndex] > height[endIndex]) {
      endIndex--;
    } else {
      startIndex++;
    }
  }
  return currentMaxArea;
};

// Copilot solution
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let maxArea = 0;
  let start = 0;
  let end = height.length - 1;

  while (start < end) {
    let currentArea = Math.min(height[start], height[end]) * (end - start);
    maxArea = Math.max(maxArea, currentArea);

    if (height[start] < height[end]) {
      start++;
    } else {
      end--;
    }
  }

  return maxArea;
};

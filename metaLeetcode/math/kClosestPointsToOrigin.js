// Leetcode 973. K Closest Points to Origin
// URL: https://leetcode.com/problems/k-closest-points-to-origin/
// Difficulty: Medium
//
// Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane and an integer k, return the k closest points to the origin (0, 0).

// The distance between two points on the X-Y plane is the Euclidean distance (i.e., √(x1 - x2)2 + (y1 - y2)2). But since it is always from the origin (0, 0), the formula becomes the square root of x squared + y squared.

// You may return the answer in any order. The answer is guaranteed to be unique (except for the order that it is in).

// Example 1:
// Input: points = [[1,3],[-2,2]], k = 1
// Output: [[-2,2]]
// Explanation:
// The distance between (1, 3) and the origin is sqrt(10).
// The distance between (-2, 2) and the origin is sqrt(8).
// Since sqrt(8) < sqrt(10), (-2, 2) is closer to the origin.
// We only want the closest k = 1 points from the origin, so the answer is just [[-2,2]].

// Example 2:
// Input: points = [[3,3],[5,-1],[-2,4]], k = 2
// Output: [[3,3],[-2,4]]
// Explanation: The answer [[-2,4],[3,3]] would also be accepted.

/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function (points, k) {
  // Create a map to store the distance of each point
  let distMap = new Map();
  for (let point of points) {
    let [x, y] = point;
    distMap.set(point, Math.sqrt(x ** 2 + y ** 2));
  }

  // Create an array to store the unique points
  let uniquePoints = Array.from(distMap.keys());

  // Sort the unique points by distance (**sort least to greatest)
  uniquePoints.sort((a, b) => distMap.get(a) - distMap.get(b));

  // Return the k closest points to the origin
  return uniquePoints.slice(0, k);
};

// my version based on the above:
var kClosest = function (points, k) {
  let distancesFromZero = new Map();

  for (let point of points) {
    let [x, y] = point;
    distancesFromZero.set(point, Math.sqrt(x ** 2 + y ** 2));
  }

  let distances = Array.from(distancesFromZero.keys());

  distances.sort((a, b) => distancesFromZero.get(a) - distancesFromZero.get(b));

  return distances.slice(0, k);
};

//On a 2D plane, there are n points with integer coordinates points[i] = [xi, yi]. Return the minimum time in seconds to visit all the points in the order given by points.

// You can move according to these rules:

// In 1 second, you can either:
// move vertically by one unit,
// move horizontally by one unit, or
// move diagonally sqrt(2) units (in other words, move one unit vertically then one unit horizontally in 1 second).
// You have to visit the points in the same order as they appear in the array.
// You are allowed to pass through points that appear later in the order, but these do not count as visits.

// Solution explanation: Since we can move to 8 directions, the only thing we need that calculate the minimum movements is that the larger distance in vertical and horizontal between 2 points.

var minTimeToVisitAllPoints = function(points) {
  let count = 0;
  for (let i = 1; i < points.length; i++) {
      let current = points[i - 1];
      let next = points[i];
      count += Math.max(Math.abs(next[0] - current[0]), Math.abs(next[1] - current[1]))
  }
  return count;
};
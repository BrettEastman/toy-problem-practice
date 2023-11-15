// Leetcode #780
// Given four integers sx, sy, tx, and ty, return true if it is possible to convert the point (sx, sy) to the point (tx, ty) through some operations, or false otherwise.
// The allowed operation on some point (x, y) is to convert it to either (x, x + y) or (x + y, y).

// Example:
// Input: sx = 1, sy = 1, tx = 3, ty = 5
// Output: true
// Explanation:
// One series of moves that transforms the starting point to the target is:
// (1, 1) -> (1, 2)
// (1, 2) -> (3, 2)
// (3, 2) -> (3, 5)

var reachingPoints = function (sx, sy, tx, ty) {
  // start with tx, ty and see if we can go backwards to sx, sy
  // Example: Input: sx = 1, sy = 1, tx = 3, ty = 5
  // while tx >= sx and ty >= sy
  while (tx >= sx && ty >= sy) {
    // if tx is equal to sx and ty is equal to ty
    if (tx === sx && ty === sy) {
      return true;
    }
    // if tx is greater than ty (3 greater than 5)
    if (tx > ty) {
      // then the previous node would be tx - ty, ty
      tx %= ty;
    } else {
      // then the previous node would be tx, ty - tx (3, 2)
      ty %= tx;
    }

    if (tx === sx) {
      if ((ty - sy) % sx === 0) {
        return true;
      } else {
        return false;
      }
    }
    if (ty === sy) {
      if ((tx - sx) % sy === 0) {
        return true;
      } else {
        return false;
      }
    }
  }
  return false;
};

console.log(reachingPoints(1, 1, 3, 5)); // true
console.log(reachingPoints(1, 1, 2, 2)); // false

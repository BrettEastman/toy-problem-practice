// Leetcode: 735. Asteroid Collision
// URL: https://leetcode.com/problems/asteroid-collision/
// Medium
//
// We are given an array asteroids of integers representing asteroids in a row.

// For each asteroid, the absolute value represents its size, and the sign represents its direction (positive meaning right, negative meaning left). Each asteroid moves at the same speed.

// Find out the state of the asteroids after all collisions. If two asteroids meet, the smaller one will explode. If both are the same size, both will explode. Two asteroids moving in the same direction will never meet.

// Example 1:
// Input: asteroids = [5,10,-5]
// Output: [5,10]
// Explanation: The 10 and -5 collide resulting in 10. The 5 and 10 never collide.

// Example 2:
// Input: asteroids = [8,-8]
// Output: []
// Explanation: The 8 and -8 collide exploding each other.

// Example 3:
// Input: asteroids = [10,2,-5]
// Output: [10]
// Explanation: The 2 and -5 collide resulting in -5. The 10 and -5 collide resulting in 10.

/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
  const stack = []; // Initialize a stack to keep track of asteroids moving to the right.

  // Iterate through each asteroid in the input array.
  for (const asteroid of asteroids) {
    // If the current asteroid is moving to the right, simply push it onto the stack.
    if (asteroid > 0) {
      stack.push(asteroid);
    } else {
      // Current asteroid is moving to the left.
      // Check for possible collisions with asteroids moving to the right in the stack.
      while (
        stack.length &&
        stack[stack.length - 1] > 0 && // Top of the stack is moving to the right.
        stack[stack.length - 1] < Math.abs(asteroid) // Top asteroid is smaller than current asteroid.
      ) {
        stack.pop(); // The asteroid on the stack explodes (is removed).
      }

      // After popping smaller asteroids, check if there's a same-sized asteroid to collide with.
      if (stack.length && stack[stack.length - 1] === Math.abs(asteroid)) {
        stack.pop(); // Both asteroids explode (remove the top asteroid from the stack).
      } else if (
        !stack.length || // No asteroids left to collide with.
        stack[stack.length - 1] < 0 // Top asteroid is moving to the left, so no collision.
      ) {
        stack.push(asteroid); // Current asteroid survives and is added to the stack.
      }
      // If the top asteroid in the stack is larger and moving to the right, the current asteroid explodes.
      // Do not push the current asteroid onto the stack in this case.
    }
  }

  return stack; // Return the final state of asteroids after all collisions.
};

// Example usage:
console.log(asteroidCollision([5, 10, -5])); // Output: [5, 10]
console.log(asteroidCollision([8, -8])); // Output: []
console.log(asteroidCollision([10, 2, -5])); // Output: [10]
console.log(asteroidCollision([-2, -1, 1, 2])); // Output: [-2, -1, 1, 2]
console.log(asteroidCollision([10, -10])); // Output: []

// Time Complexity: Each asteroid is processed exactly once, leading to a time complexity of O(n).
// The space complexity is also O(n) in the worst case, where no collisions occur, and all asteroids are stored in the stack.

// Leetcode: 199. Binary Tree Right Side View
// URL: https://leetcode.com/problems/binary-tree-right-side-view/
// Difficulty: Medium
//
// Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom. So it's not just the rightmost node at each level, but the rightmost node at each level that you can see from the right side of the tree, which could be a left node if there are no right nodes at that level.
//
// Example 1:
// Input: root = [1,2,3,null,5,null,4, 7]
// Output: [1,3,4, 7]
// Explanation:
// The right view of the binary tree is as follows:
//    1
//  /   \
// 2     3
//  \     \
//   5     4
//   /
//  7

// Although it would seem that DFS would be the best way to solve this problem (and there is a DFS solution), BFS is actually the best way to solve this problem.
// BFS is also known as level order traversal. For each level of the tree, we only add the rightmost node to the result array.
// The trick to solving this one is to keep track of the number of nodes at each level. We can do this by using a for loop to iterate through the nodes at each level, only adding the value of the rightmost node to the result array.

// BFS solution:
// Time complexity: O(n)
// Space complexity: O(n)
var rightSideView = function (root) {
  // If the tree is empty, return an empty array
  if (!root) return [];

  let result = []; // Initialize the result array to store the rightmost values
  let queue = [root]; // Initialize the queue with the root node for BFS traversal

  // Continue the BFS until there are no nodes left to process
  while (queue.length) {
    let levelSize = queue.length; // Number of nodes at the current level

    // Iterate through all nodes at the current level
    for (let i = 0; i < levelSize; i++) {
      let node = queue.shift(); // Dequeue the first node in the queue

      // If it's the last node in this level, add its value to the result
      if (i === levelSize - 1) result.push(node.val);

      // Enqueue the left child if it exists
      if (node.left) queue.push(node.left);

      // Enqueue the right child if it exists
      if (node.right) queue.push(node.right);
    }
  }

  return result; // Return the array of rightmost node values
};

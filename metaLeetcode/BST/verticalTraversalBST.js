// Leetcode 987. Vertical Order Traversal of a Binary Tree
// URL: https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/
// Difficulty: Hard
//
// Given the root of a binary tree, calculate the vertical order traversal of the binary tree.

// For each node at position (row, col), its left and right children will be at positions (row + 1, col - 1) and (row + 1, col + 1) respectively. The root of the tree is at (0, 0).

// The vertical order traversal of a binary tree is a list of top-to-bottom orderings for each column index starting from the leftmost column and ending on the rightmost column. There may be multiple nodes in the same row and same column. In such a case, sort these nodes by their values.

// Return the vertical order traversal of the binary tree.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * Performs a vertical traversal of a binary tree.
 * @param {TreeNode} root - The root of the binary tree.
 * @return {number[][]} - A list of lists containing node values grouped by their vertical columns.
 */
var verticalTraversal = function (root) {
  // create a new Map to hold the columns as keys, with an array holding objects with the node val and row of a node
  let columnsMap = new Map();

  // Queue for BFS traversal, storing node along with its row and column.
  let queue = [{ node: root, row: 0, col: 0 }];

  // Perform BFS to traverse the tree level by level.
  while (queue.length) {
    let { node, row, col } = queue.shift();

    // If the column is already in the map, append the current node.
    if (columnsMap.has(col)) {
      columnsMap.get(col).push({ val: node.val, row });
    } else {
      // If the column is not in the map, create a new entry.
      columnsMap.set(col, [{ val: node.val, row }]);
    }

    // Add left child to the queue with updated row and column.
    if (node.left) {
      queue.push({ node: node.left, row: row + 1, col: col - 1 });
    }

    // Add right child to the queue with updated row and column.
    if (node.right) {
      queue.push({ node: node.right, row: row + 1, col: col + 1 });
    }
  }

  // Convert the map entries to an array for sorting.
  let colMapArr = Array.from(columnsMap.entries());

  // Sort the columns based on their column index.
  colMapArr.sort((a, b) => a[0] - b[0]);

  let result = [];

  // Iterate through each sorted column.
  for (let [col, nodes] of colMapArr) {
    // Sort the nodes first by row, then by value if rows are equal.
    nodes.sort((a, b) => a.row - b.row || a.val - b.val);
    // Could also look like this:
    // currentNodes.sort((a, b) => {
    //   if (a.row !== b.row) {
    //     return a.row - b.row; // Sort by row first
    //   }
    //   return a.val - b.val; // Then sort by value if rows are equal
    // });

    // Extract the node values and add to the result.
    result.push(nodes.map((node) => node.val));
  }

  return result;
};

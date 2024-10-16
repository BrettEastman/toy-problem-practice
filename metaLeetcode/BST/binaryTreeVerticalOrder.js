// Leetcode: 314. Binary Tree Vertical Order Traversal
// Given the root of a binary tree, return the vertical order traversal of its nodes' values. (i.e., from top to bottom, column by column).
// If two nodes are in the same row and column, the order should be from left to right.
// Example 1:
// Input: root = [3,9,20,null,null,15,7]
// Output: [[9],[3,15],[20],[7]]
// Example 2:
// Input: root = [3,9,8,4,0,1,7]
// Output: [[4],[9],[3,0,1],[8],[7]]
// Example 3:
// Input: root = [3,9,8,4,0,1,7,null,null,null,2,5]
// Output: [[4],[9,5],[3,0,1],[8,2],[7]]

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

// My solution after studying someone else's solution. I didn't understand what the input was since when I console logged it, it looked like a normal array on the Leetcode coding sandbox, but I just need to not worry about what it prints out as and just remember it is an array of TreeNodes in this case.
var verticalOrder = function (root) {
  if (!root || root === []) return [];
  let columnsMap = new Map();
  let queue = [{ node: root, column: 0 }];

  // while queue has length
  while (queue.length) {
    // shift from queue (destructure the array into node and column)
    let { node, column } = queue.shift();
    // if columnsMap has the column already
    if (columnsMap.has(column)) {
      columnsMap.get(column).push(node.val);
    } else {
      columnsMap.set(column, [node.val]);
    }

    // if node has a left
    if (node.left) {
      // add node.left to the queue as an object {node: node.left, column: column - 1}
      queue.push({ node: node.left, column: column - 1 });
    }
    // if node has a right
    if (node.right) {
      // add node.right to the queue as an object {node: node.right, column: column + 1}
      queue.push({ node: node.right, column: column + 1 });
    }
  }

  // create a new array from the columnsMap entries
  let colMapArr = Array.from(columnsMap.entries());
  // sort the array by the column number
  colMapArr.sort((a, b) => a[0] - b[0]);
  // return the array without the column numbers
  return colMapArr.map((col) => col[1]);
  // use map to map over and mutate the array
};

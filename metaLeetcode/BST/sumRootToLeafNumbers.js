// Leetcode: 129. Sum Root to Leaf Numbers
// URL: https://leetcode.com/problems/sum-root-to-leaf-numbers/
// Difficulty: Medium

// You are given the root of a binary tree containing digits from 0 to 9 only.

// Each root-to-leaf path in the tree represents a number.

// For example, the root-to-leaf path 1 -> 2 -> 3 represents the number 123.
// Return the total sum of all root-to-leaf numbers. Test cases are generated so that the answer will fit in a 32-bit integer.

// A leaf node is a node with no children.

// Example 1:
// Input: root = [1,2,3]
// Output: 25
// Explanation:
// The root-to-leaf path 1->2 represents the number 12.
// The root-to-leaf path 1->3 represents the number 13.
// Therefore, sum = 12 + 13 = 25.

// Example 2:
// Input: root = [4,9,0,5,1]
// Output: 1026
// Explanation:
// The root-to-leaf path 4->9->5 represents the number 495.
// The root-to-leaf path 4->9->1 represents the number 491.
// The root-to-leaf path 4->0 represents the number 40.
// Therefore, sum = 495 + 491 + 40 = 1026.

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
 * @return {number}
 */
var sumNumbers = function (root) {
  // Helper function to perform DFS traversal of the tree.
  const dfs = (node, sum) => {
    // If the node is null, this is our first base case, so return 0.
    if (!node) return 0;

    // Calculate the new sum by multiplying the current sum by 10 and adding the node value.
    sum = sum * 10 + node.val;

    // If the node is a leaf node, this is our second base case, so return the sum.
    if (!node.left && !node.right) return sum;

    // Recursively calculate the sum for the left and right subtrees.
    return dfs(node.left, sum) + dfs(node.right, sum);
  };

  // Start the DFS traversal from the root node with an initial sum of 0.
  return dfs(root, 0);
};

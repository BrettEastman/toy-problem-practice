// Leetcode: 1644. Lowest Common Ancestor of a Binary Tree II
// URL: https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-ii/
// Medium
//
// Given the root of a binary tree, return the lowest common ancestor (LCA) of two given nodes, p and q. If either node p or q does not exist in the tree, return null. All values of the nodes in the tree are unique.
//
// According to the definition of LCA on Wikipedia: "The lowest common ancestor of two nodes p and q in a binary tree T is the lowest node that has both p and q as descendants (where we allow a node to be a descendant of itself)." A descendant of a node x is a node y that is on the path from node x to some leaf node.

// All Node.val are unique.
// p != q
// p and q will exist in the tree.
//
// Example 1:
//     3
//    / \
//   5   1
//  / \ / \
// 6  2 0  8
//   / \
//  7   4
// Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
// Output: 5
// Explanation: The LCA of nodes 5 and 4 is 5.
//
// Example 2:
//     3
//    / \
//   5   1
//  / \ / \
// 6  2 0  8
//   / \
//  7   4
// Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
// Output: 3
// Explanation: The LCA of nodes 5 and 1 is 3.
//
// Example 3:
// Input: root = [1,2], p = 1, q = 2
// Output: 1

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  // Initialize a variable to store the LCA.
  let lca = null;

  // Helper function to traverse the tree and find the LCA.
  // we are doing dfs on the root all the way down the tree until we find either a p or a q. DFS is a function that returns a boolean, so if it returns true, that will propogate up, returning true for each function call
  // while we are going down the tree we can be doing stuff. In this case, we just update the lca whenever the following conditions are met: current node is either p or q and dfs on left or right is true, or dfs on both left and right are true. If we find the lca, we update the lca variable to the current node
  const dfs = (node) => {
    // Base case: If the current node is null, return false.
    if (!node) {
      return false;
    }

    // Check if the current node is one of the target nodes.
    const isP = node === p;
    const isQ = node === q;

    // Recursively search the left subtree for the target nodes.
    const left = dfs(node.left);

    // Recursively search the right subtree for the target nodes.
    const right = dfs(node.right);

    // If the current node is one of the target nodes or
    // both target nodes are found in the left and right subtrees,
    // update the LCA to the current node.
    if (((isP || isQ) && (left || right)) || (left && right)) {
      lca = node;
    }

    // Return true if the current node is one of the target nodes
    // or if the target nodes are found in the left or right subtrees.
    return isP || isQ || left || right;
  };

  // Start the recursive traversal from the root.
  dfs(root);

  // Return the LCA of the target nodes.
  return lca;
};

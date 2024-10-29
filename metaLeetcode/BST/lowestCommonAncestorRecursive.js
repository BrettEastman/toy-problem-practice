// Leetcode: 236. Lowest Common Ancestor of a Binary Tree
// URL: https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/
// Difficulty: Medium
//
// Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

// According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

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
// Explanation: The LCA of nodes 5 and 4 is 5, since a node can be a descendant of itself according to the LCA definition.
// 1. Initial Call:
// - lowestCommonAncestor(root=3, p=5, q=4)
// - root is not null, p, or q

// 2. Left Subtree:
// - lowestCommonAncestor(root=5, p=5, q=4)
// - root is p, return p

// 3. Right Subtree:
// - lowestCommonAncestor(root=1, p=5, q=4)
// - root is not null, p, or q

// 4. Left Subtree of Right Subtree:
// - lowestCommonAncestor(root=0, p=5, q=4)
// - root is not null, p, or q
// - Both left and right subtrees return null, return null

// 5. Right Subtree of Right Subtree:
// - lowestCommonAncestor(root=8, p=5, q=4)
// - root is not null, p, or q
// - Both left and right subtrees return null, return null

// 6. Determine LCA for Subtree 1 (meaning Node 1):
// - both left and right calls returned null, return null
// - So this means we know the node 1 subtree does not contain the LCA

// 7. Determine LCA:
// - left = 5, right = null
// - Return left

// Summary:
// - The funtion recursively searches for p and q in both left and right subtrees.
// - If both subtrees return null, the current node is not part of the LCA.
// - If both subtrees return non-null, the current node IS the LCA. We've found it!
// - If only one subtree returns a non-null, that result is propagated up.

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
  // Base case:
  // If the current node is null, or matches either p or q,
  // then the current node could be part of the LCA.
  if (!root || root === p || root === q) return root;

  // Recursively search for LCA in the left subtree.
  const left = lowestCommonAncestor(root.left, p, q);

  // Recursively search for LCA in the right subtree.
  const right = lowestCommonAncestor(root.right, p, q);

  // If neither subtree returns a valid node, return null.
  if (!left && !right) return null;

  // If only one subtree returns a valid node, it means both p and q
  // are located in that subtree. Thus, return the non-null result.
  if (!left) return right;
  if (!right) return left;

  // If both left and right are non-null, it means p and q are found
  // in different subtrees. Hence, the current node is their LCA.
  return root;
};

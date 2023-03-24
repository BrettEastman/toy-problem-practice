// You are given two binary trees root1 and root2.

// Imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not. You need to merge the two trees into a new binary tree. The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node. Otherwise, the NOT null node will be used as the node of the new tree.

// Return the merged tree.

// Note: The merging process must start from the root nodes of both trees.

/*
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// my correct attempt
var mergeTrees = function(root1, root2) {
  if (!root1) {
      return root2;
  }
  if (!root2) {
      return root1;
  }
  root1.val += root2.val;
  if (root1.left !== null) {
      mergeTrees(root1.left, root2.left);
  } else {
      root1.left = root2.left;
  }
  if (root1.right !== null) {
      mergeTrees(root1.right, root2.right);
  } else {
      root1.right = root2.right;
  }
  return root1;
};

// fastest solution on Leetcode:
var mergeTrees = function(root1, root2) {
  if(!root1 ||!root2)return root1||root2

  let node=new TreeNode(root1.val+root2.val)

  node.left= mergeTrees(root1.left,root2.left)
  node.right= mergeTrees(root1.right,root2.right)
  return node
};

// my first attempt which was wrong because I thought it was just arrays
var mergeTrees = function(root1, root2) {
  const length = Math.max(root1.length, root2.length);
  const merged = [];
  for (let i = 0; i < length; i++) {
      let combo;
      if (root1[i] !== null && root2[i] !== null) {
          combo = root1[i] + root2[i];
      } else if (root1[i] !== null && root2[i] === null) {
          combo = root1;
      } else if (root1[i] === null && root2[i] !== null) {
          combo = root2;
      } else if (root1[i] === null && root2[i] === null) {
          combo = null;
      }
      merged.push(combo);
  }
  return merged;
};
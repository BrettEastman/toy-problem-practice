// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

// The best and correct solution:
var maxDepth = function(root) {
  return !root ? 0 : 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};


// my solution which gave a wrong answer:
var maxDepth = function(root) {
  let depthR = 1;
  let depthL = 1;
  if (!root) {
      return 0;
  }
  function checkDepth(tr) {
      if (tr.left !== null) {
          depthL++;
          checkDepth(tr.left)
      }
      if (tr.right !== null) {
          depthR++;
          checkDepth(tr.right)
      }
  }
  checkDepth(root);
  return Math.max(depthR, depthL);
};
// You are given the root of a binary search tree (BST) and an integer val.

// Find the node in the BST that the node's value equals val and return the subtree rooted with that node. If such a node does not exist, return null.

// pure recursion solution:
var searchBST = function(root, val) {
  if(!root) return null;
  if(root.val === val) return root;
  if(val < root.val) return searchBST(root.left, val);
  if(val > root.val) return searchBST(root.right, val);
};

// iterative solution:
// no need to use stack since "val"  or "null" will be eventually found in the end
// and we do not need to traverse what we skipped
var searchBST = function(root, val) {
  while(root !== null && root.val !== val){
      root = val < root.val ? root.left : root.right;
  }
  return root;
}

// my first attempt, which was wrong
var searchBST = function(root, val) {
  if (!root) {
      return null;
  }
  if (root.val === val) {
      return root;
  }
  searchBST(root.left, val);
  searchBST(root.right, val);
};
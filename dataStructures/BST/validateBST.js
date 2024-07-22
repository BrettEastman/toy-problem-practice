// Validate BST
// Write a function that takes in a potentially invalid Bindary Search Tree and returns a boolean represting whether the BST is valid.
// Each BST node has an integer value, a left child node, and a right child node. A node is said to be a valid BST node if and only if it satisfies the BST property: its value is strictly greater than the values of every node to its left; its value is less than or equal to the values of every node to its right; and its children nodes are either valid BST nodes themselves or None/null.
// A BST is valid if and only if all of its nodes are valid VST nodes

// This problem works by taking in a minimum value and a maximum value for each node. We start out calling the function on the BST with minimum being -Infinity and the max being Infinity. So we are creating a kind of "global" min and max and comparing each trees value to those. In a BST with 10 as its value (tree.value), we know that tree.right.value cannot be less than that and we know that tree.left.value cannot be greater than that. So 10 becomes the maxValue for tree.left and 10 becomes the minValue for tree.right. So, we recursively call the function on tree.left with -Infinity still as the minimum, but this time 10 will be the max. And likewise, the function is recursively called on tree.right with the minimum being 10 and the max still being Infinity.

// do not edit BST class
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// solution:
function validateBST(tree) {
  return validateBSTHelper(tree, -Infinity, Infinity);
}

function validateBSTHelper(tree, minValue, maxValue) {
  if (tree === null) return true;
  if (tree.value >= maxValue || tree.value < minValue) {
    return false;
  }
  let leftIsValid = validateBSTHelper(tree.left, minValue, tree.value);
  return leftIsValid && validateBSTHelper(tree.right, tree.value, maxValue);
}

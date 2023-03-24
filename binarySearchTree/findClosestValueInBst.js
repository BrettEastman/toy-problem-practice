// Algoexpert:
// Write a function that tkes in a BST and a target integer value and returns the closest value to that target value contained in the BST.
// You can assume that there will only be one closest value.
// Easch BST node has an integer value, a left child node, and a right child node. A node is said to be a valid BST node if and only if it satisfies the BST property: its value is strictly greater thatn the values of every node to its left; its value is less than or equal to the values of every node to its right; and its children nodes are either valid BST nodes themselves or None/null.

// correct version:
 function findClosestValueInBst(tree, target) {
   function helper(tree, target, closest) {
     if (!tree) {
       return closest;
     }
     if (Math.abs(target - closest) > Math.abs(target - tree.value)) {
       closest = tree.value;
     }
     if (target > tree.value) {
       return helper(tree.right, target, closest);
     } else if (target < tree.value) {
       return helper(tree.left, target, closest);
     } else {
       return closest;
     }
   }
   return helper(tree, target, Infinity);
}

// my first attempt, which was wrong:
function findClosestValueInBst(tree, target) {
  let closest = tree.value;
  let difference = 100;

  function recursive(tree) {
    if (!tree || tree.left === null || tree.right === null) {
      return;
    }
    if (tree.value === target) {
      closest = tree.value;
      return;
    } else if (tree.value > target) {
      let currentDiff = Math.abs(target - tree.left);
      if (currentDiff < difference) {
        difference = currentDiff;
        closest = tree.left;
        recursive(tree.left);
      }
    } else if (tree.value < target) {
      let currentDiff = Math.abs(target - tree.right);
      if (currentDiff < difference) {
        difference = currentDiff;
        closest = tree.right;
        recursive(tree.right);
      }
    }
  }
  recursive(tree);

  return closest;
}

// This is the class of the input tree. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

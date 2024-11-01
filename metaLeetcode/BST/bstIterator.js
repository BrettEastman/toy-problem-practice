// Leetcode: 173. Binary Search Tree Iterator
// URL: https://leetcode.com/problems/binary-search-tree-iterator/
// Difficulty: Medium
// Implement the BSTIterator class that represents an iterator over the in-order traversal of a binary search tree (BST):

// BSTIterator(TreeNode root) Initializes an object of the BSTIterator class. The root of the BST is given as part of the constructor. The pointer should be initialized to a non-existent number smaller than any element in the BST.
// boolean hasNext() Returns true if there exists a number in the traversal to the right of the pointer, otherwise returns false.
// int next() Moves the pointer to the right, then returns the number at the pointer.
// Notice that by initializing the pointer to a non-existent smallest number, the first call to next() will return the smallest element in the BST.

// You may assume that next() calls will always be valid. That is, there will be at least a next number in the in-order traversal when next() is called.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * Implements an iterator over a binary search tree (BST).
 * The iterator is initialized with the root node of the BST.
 * It provides methods to get the next smallest number and to check
 * if there is a next smallest number.
 *
 * @param {TreeNode} root - The root of the BST.
 */
var BSTIterator = function (root) {
  this.stack = []; // Stack to maintain the traversal state
  this.pushAllLeft(root); // Initialize the stack with all left descendants of root
};

/**
 * Returns the next smallest number in the BST.
 *
 * @return {number} - The next smallest number.
 */
BSTIterator.prototype.next = function () {
  let node = this.stack.pop(); // Retrieve the top node from the stack
  this.pushAllLeft(node.right); // If the node has a right child, push all its left descendants
  return node.val; // Return the value of the current node
};

/**
 * Returns whether the BST iterator has a next smallest number.
 *
 * @return {boolean} - True if there exists a next smallest number, else false.
 */
BSTIterator.prototype.hasNext = function () {
  return this.stack.length > 0; // If stack is not empty, there are still nodes to process
};

/**
 * Helper method to push all left descendants of a given node onto the stack.
 * This ensures that the smallest elements are on top of the stack.
 *
 * @param {TreeNode} node - The starting node.
 */
BSTIterator.prototype.pushAllLeft = function (node) {
  while (node) {
    this.stack.push(node); // Push the current node onto the stack
    node = node.left; // Move to the left child
  }
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
// Time: O(n)
// Space: O(n)

// EXAMPLE:
// Consider the following BST:
//   7
//  / \
// 3   15
//    /  \
//   9    20

// Initialization:
// - Stack after pushAllLeft(root): [7, 3]

// First next() Call:
// - Pop 3 from the stack.
// - 3 has no right child.
// - Return 3.

// Second next() Call:
// - Pop 7 from the stack.
// - 7 has a right child (15), so push all left descendants of 15.
// - Stack after pushing left descendants: [15, 9]
// - Return 7.

// Subsequent next() Calls:
// - Pop 9, push all left descendants of its right child (none), return 9.
// - Pop 15, push all left descendants of its right child (20), stack: [20], return 15.
// - Pop 20, push all left descendants of its right child (none), return 20.

// hasNext() Call:
// - Returns false as the stack is empty.

// Leetcode: 426. Convert Binary Search Tree to Sorted Doubly Linked List
// URL: https://leetcode.com/problems/convert-binary-search-tree-to-sorted-doubly-linked-list/
// Difficulty: Medium
//
// Convert a Binary Search Tree to a sorted Circular Doubly-Linked List in place.

// You can think of the left and right pointers as synonymous to the predecessor and successor pointers in a doubly-linked list. For a circular doubly linked list, the predecessor of the first element is the last element, and the successor of the last element is the first element.

// We want to do the transformation in place. After the transformation, the left pointer of the tree node should point to its predecessor, and the right pointer should point to its successor. You should return the pointer to the smallest element of the linked list.

// Time: O(n) - We visit every node in the BST exactly once

/**
 * // Definition for a _Node.
 * function _Node(val, left, right) {
 *      this.val = val;
 *      this.left = left;
 *      this.right = right;
 *  };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
var treeToDoublyList = function (root) {
  // Base case: if the root is null, then we weren't given a bst in the first place, so return null
  if (!root) return null;

  // Initialize the first and last nodes of the doubly linked list
  let first = null;
  let last = null;

  // Helper function to perform an in-order traversal of the BST (which automatically sorts it), while simultaneously creating the doubly linked list
  function dfs(node) {
    // Overall what we are doing with this is processing the left, then the root, then the right
    // Base case: if the node is null, return
    if (!node) return;

    // PROCESS LEFT: Recursively traverse the left subtree, to go as far left as possible. We will be at the very last left node when we reach the base case which means it will be the smallest node in the BST
    dfs(node.left);

    // PROCESS ROOT: Create a new doubly linked list node with the current node's value
    // Update the right pointer of the last node and the left pointer of the current node
    if (!last) {
      // if we haven't seen an element, but we have returned from the leftmost node, then this is the first node
      first = node;
    } else {
      // otherwise we have seen an element, and we need to connect the last node to the current node. If we have seen a node before, we know it is smaller than the current node, so we connect the last node to the current node
      last.right = node;
      node.left = last;
    }

    // We have now processed that node, so we need to update the last node to the current node
    last = node;

    // PROCESS RIGHT: Recursively traverse the right subtree
    dfs(node.right);
  }

  // Call the recursive helper function to perform an in-order traversal of the BST while simultaneously creating the doubly linked list
  dfs(root);

  // Once the function has run, we will have linked every single node in our BST, and made it into a LinkedList, except the first and the last, so we connect the first and last nodes to form a circular doubly linked list
  first.left = last;
  last.right = first;

  // Return the pointer to the smallest element of the linked list
  return first;
};

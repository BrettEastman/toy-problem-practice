// Leetcode: 138. Copy List with Random Pointer
// URL: https://leetcode.com/problems/copy-list-with-random-pointer/
// Difficulty: Medium
//
// A linked list of length n is given such that each node contains an additional random pointer, which could point to any node in the list, or null.

// Construct a deep copy of the list. The deep copy should consist of exactly n brand new nodes, where each new node has its value set to the value of its corresponding original node. Both the next and random pointer of the new nodes should point to new nodes in the copied list such that the pointers in the original list and copied list represent the same list state. None of the pointers in the new list should point to nodes in the original list.

// For example, if there are two nodes X and Y in the original list, where X.random --> Y, then for the corresponding two nodes x and y in the copied list, x.random --> y.

// Return the head of the copied linked list.

// The linked list is represented in the input/output as a list of n nodes. Each node is represented as a pair of [val, random_index] where:

// val: an integer representing Node.val
// random_index: the index of the node (range from 0 to n-1) that the random pointer points to, or null if it does not point to any node.
// Your code will only be given the head of the original linked list.

/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function (head) {
  let visited = new Map(); // Map to keep track of copied nodes

  function copy(node) {
    if (!node) return null; // Base case: if the node is null, return null

    if (visited.has(node)) return visited.get(node);
    // If the node is already copied, return the copied instance to avoid duplication and prevent infinite recursion
    // I had been curious as to what does the returned node include:
    //
    // Single Node Copy:
    // The returned node from visited.get(node) is the copied node that has been created in the visited map.
    // It does not include the entire list; rather, it references other copied nodes through its next and random pointers.
    //
    // Connections to Other Nodes:
    // next Pointer:
    // Points to the copied instance of the original node's next node.
    // If the next node has not been copied yet, it will be copied recursively and update the visited map accordingly.
    // random Pointer:
    // Points to the copied instance of the original node's random node.
    // If the random node has not been copied yet, it will be copied recursively and update the visited map accordingly.

    let newNode = new _Node(node.val);
    // Create a new node with the same value as the original node

    visited.set(node, newNode);
    // Mark this node as copied in the visited map

    newNode.next = copy(node.next);
    // Recursively copy the next node and assign it to the new node's next

    newNode.random = copy(node.random);
    // Recursively copy the random node and assign it to the new node's random

    return newNode; // Return the newly copied node
  }

  return copy(head); // Initiate the copying process with the head node
};

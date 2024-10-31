// Leetcode: 133. Clone Graph
// URL: https://leetcode.com/problems/clone-graph/
// Difficulty: Medium
//
// Given a reference of a node in a connected undirected graph.
//
// Return a deep copy (clone) of the graph.
//
// Each node in the graph contains a value (int) and a list (List[Node]) of its neighbors.

// Test case format:

// For simplicity, each node's value is the same as the node's index (1-indexed). For example, the first node with val == 1, the second node with val == 2, and so on. The graph is represented in the test case using an adjacency list.

// An adjacency list is a collection of unordered lists used to represent a finite graph. Each list describes the set of neighbors of a node in the graph.

// The given node will always be the first node with val = 1. You must return the copy of the given node as a reference to the cloned graph.

/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function (node) {
  if (!node) return null; // Base case: if the node is null, return null

  let visited = new Map(); // Map to keep track of copied nodes

  function copy(node) {
    if (visited.has(node)) return visited.get(node);
    // If the node is already copied, return the copied instance to avoid duplication and prevent infinite recursion

    let newNode = new _Node(node.val);
    // Create a new node with the same value as the original node

    visited.set(node, newNode);
    // Mark this node as copied in the visited map

    for (let neighbor of node.neighbors) {
      newNode.neighbors.push(copy(neighbor));
      // Recursively copy the neighbors of the node and add them to the new node's neighbors list
    }

    return newNode;
  }

  return copy(node);
};

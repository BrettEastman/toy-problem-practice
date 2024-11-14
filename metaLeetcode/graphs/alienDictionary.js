// Leetcode 269. Alien Dictionary
// URL: https://leetcode.com/problems/alien-dictionary/
// Hard

// There is a new alien language that uses the English alphabet. However, the order of the letters is unknown to you.

// You are given a list of strings words from the alien language's dictionary. Now it is claimed that the strings in words are
// sorted lexicographically by the rules of this new language.

// If this claim is incorrect, and the given arrangement of string in words cannot correspond to any order of letters, return "".

// Otherwise, return a string of the unique letters in the new alien language sorted in lexicographically increasing order by the new language's rules. If there are multiple solutions, return any of them.

// Example 1:
// Input: words = ["wrt","wrf","er","ett","rftt"]
// Output: "wertf"

// Example 2:
// Input: words = ["z","x"]
// Output: "zx"

// Example 3:
// Input: words = ["z","x","z"]
// Output: ""
// Explanation: The order is invalid, so return "".

/**
 * @param {string[]} words
 * @return {string}
 */
var alienOrder = function (words) {
  // Use Map to create a graph of the alien language, to represent character precedence.
  const graph = new Map();

  // Initialize the graph with all unique characters.
  // Purpose: Create a graph where each node represents a unique character from the input words.
  // Initialize an adjacency list (using Set) where each character maps to a set of characters that should come after it based on the dictionary order.
  for (const word of words) {
    for (const char of word) {
      if (!graph.has(char)) {
        graph.set(char, new Set()); // Each character points to a set of characters that come after it.
      }
    }
  }

  // Build the graph by comparing adjacent words.
  // Purpose:
  // Compare each pair of adjacent words to determine the relative ordering of characters.
  // Identify the first pair of differing characters and establish a precedence relationship by adding a directed edge in the graph.
  // Handle the edge case where a longer word precedes its prefix, which would make the ordering invalid.
  for (let i = 0; i < words.length - 1; i++) {
    const word1 = words[i];
    const word2 = words[i + 1];
    const minLength = Math.min(word1.length, word2.length);

    if (word1.length > word2.length && word1.startsWith(word2)) {
      return ""; // If a longer word precedes its prefix, the ordering is invalid.
    }

    let j = 0;
    // Find the first differing character between the two words.
    while (j < minLength && word1[j] === word2[j]) {
      j++;
    }
    // This is how we solve the edge case if one word is a prefix of the other. If j is equal to the minLength, we know one word is a prefix, which makes it invalid.
    if (j < minLength) {
      const char1 = word1[j];
      const char2 = word2[j];
      graph.get(char1).add(char2); // Add an edge from char1 to char2. This means char1 should come before char2 in the Alien Dictionary.
    }
  }

  // Prepare for topological sort.
  const visited = new Set(); // Keeps track of visited nodes: Nodes that have been fully processed.
  const visiting = new Set(); // Keeps track of nodes in the current path (for cycle detection). These are Nodes that are currently in the recursion stack.
  const result = []; // Stores the characters in topologically sorted order: the final character order of the Alien Dictionary.

  // Perform DFS on each node:
  // Iterate through each node in the graph and perform DFS to determine the topological order.
  // If a cycle is detected during DFS (dfs returns false), return an empty string as no valid character ordering exists. A cycle is when two nodes are directed to each other (in each others Sets), i.e. 'a' -> 'b' and 'b' -> 'a'. This means that it is impossible to determine the order of 'a' and 'b'.
  // Reverse the accumulated result to obtain the correct character order since DFS adds characters post-recursion.
  for (const [node, neighbors] of graph) {
    if (!visited.has(node)) {
      if (!dfs(node, graph, visited, visiting, result)) {
        return ""; // If a cycle is detected, return an empty string as there's no valid ordering.
      }
    }
  }

  // otherwise the dfs has returned true, which means we have been given the go ahead to return the result.
  // Reverse the result to get the correct order and join to form the final string.
  return result.reverse().join("");
};

/**
 * Helper function to perform DFS and detect cycles.
 *
 * @param {string} node - The current character node.
 * @param {Map} graph - The graph representing character precedence.
 * @param {Set} visited - Set of nodes that have been fully processed.
 * @param {Set} visiting - Set of nodes that are currently being visited (in the recursion stack).
 * @param {string[]} result - Array to store the topological order of characters.
 * @return {boolean} - Returns true if no cycle is detected, otherwise false.
 */
function dfs(node, graph, visited, visiting, result) {
  // Detect cycles by maintaining a visiting set; if a node is encountered that's already in visiting, a cycle exists.
  if (visiting.has(node)) {
    return false; // A cycle is detected if we revisit a node in the current path.
  }

  if (visited.has(node)) {
    return true; // If already visited, no need to process again.
  }

  visiting.add(node); // Mark the node as being visited in the current path.

  // Recursively visit each node and its neighbors to perform a DFS.
  for (const neighbor of graph.get(node)) {
    if (!dfs(neighbor, graph, visited, visiting, result)) {
      return false; // If a cycle is detected in the recursion, propagate false upwards.
    }
  }

  // otherwise the dfs has returned true, which means we have been given the go ahead to push this node to the result array and return true.
  visiting.delete(node); // But first, remove the node from the current path since we're done processing it.
  // Upon successfully visiting all neighbors without detecting a cycle, add the node to the result array and mark it as visited.
  visited.add(node); // Mark the node as fully processed.
  result.push(node); // Add the node to the result array.

  return true; // No cycle detected for this node.
}

// Example usage:
const words1 = ["wrt", "wrf", "er", "ett", "rftt"];
console.log(alienOrder(words1)); // Output: "wertf"

const words2 = ["z", "x"];
console.log(alienOrder(words2)); // Output: "zx"

const words3 = ["z", "x", "z"];
console.log(alienOrder(words3)); // Output: "" (Invalid due to cycle)

const words4 = ["abc", "ab"];
console.log(alienOrder(words4)); // Output: "" (Invalid due to cycle)

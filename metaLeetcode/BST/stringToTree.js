// Leetcode: 536. Construct Binary Tree from String
// URL: https://leetcode.com/problems/construct-binary-tree-from-string/
// Medium
// You need to construct a binary tree from a string consisting of parenthesis and integers.

// The whole input represents a binary tree. It contains an integer followed by zero, one or two pairs of parenthesis. The integer represents the root's value and a pair of parenthesis contains a child binary tree with the same structure.

// You always start to construct the left child node of the parent first if it exists.

// Example 1:
// Input: s = "4(2(3)(1))(6(5))"
// Output: [4,2,6,3,1,5]

// Example 2:
// Input: s = "4(2(3)(1))(6(5)(7))"
// Output: [4,2,6,3,1,5,7]

// Example 3:
// Input: s = "-4(2(3)(1))(6(5)(7))"
// Output: [-4,2,6,3,1,5,7]

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}
/**
 * @param {string} s
 * @return {TreeNode}
 */
var str2tree = function (s) {
  // create a helper function to parse the string
  function parseString(start, end) {
    // if the start index is greater than the end index, return null
    if (start > end) return null;

    // find the first open parenthesis
    let i = start;
    while (i <= end && s[i] !== "(") i++;

    // create a new node with the value from the substring
    let node = new TreeNode(parseInt(s.substring(start, i)));

    // if the index is greater than the end index, return the node
    if (i > end) return node;

    // find the matching closing parenthesis
    let count = 0;
    let j = i;
    while (j <= end) {
      if (s[j] === "(") count++;
      if (s[j] === ")") count--;
      if (count === 0) break;
      j++;
    }

    // recursively parse the left and right subtrees
    node.left = parseString(i + 1, j - 1);
    node.right = parseString(j + 2, end - 1);

    return node;
  }

  // call the helper function with the start and end indices
  return parseString(0, s.length - 1);
};

// Test cases
console.log(str2tree("4(2(3)(1))(6(5))")); // [4,2,6,3,1,5]
// console.log(str2tree("4(2(3)(1))(6(5)(7))")); // [4,2,6,3,1,5,7]

// my version of the solution:
var str2tree = function (s) {
  // create helper function to parse the string
  function helper(start, end) {
    // Base case: if the start index is greater than the end index, return null
    if (start > end) return null;
    // find the first open parenthesis
    // keep start as is, so create a new var i equal to start
    // use a while loop until you find the character
    let i = start;
    while (i <= end && s[i] !== "(") i++;
    // create a new node with the value from the substring
    // since we have found the first (, we know this substring will be the value of a new Node we need to create
    let newNode = new TreeNode(parseInt(s.substring(start, i)));
    // if the index is greater than the end index, then we already went from start to end and there were no more parens, so return the node
    if (i > end) return newNode;
    // Otherwise, find the matching closing parenthesis
    // do this by creating a count var set to zero, but also create a third pointer j and set it equal to i. i and j will determine the next subsection
    let counter = 0;
    let j = i;
    while (j <= end) {
      // we know that the first char is ( but we need an if statement to increment the count everytime we see one
      if (s[j] === "(") counter++;
      // but if we see ) then we need to decrement the count
      if (s[j] === ")") counter--;
      // if the count is back to zero, then we have found our next nested group and we can break out
      if (counter === 0) break;
      // increment j to move it along to the end of this subsection
      j++;
    }
    // recursively parse the left and right subtrees
    // we have our new node, so here is what to do (Note, the addition or subtractions are to account for parens at beginning and end that we are aware of, but don't need in the function calls):
    newNode.left = helper(i + 1, j - 1);
    newNode.right = helper(j + 2, end - 1);

    return newNode;
  }

  // return the called helper function from the first item to the last item
  return helper(0, s.length - 1);
};

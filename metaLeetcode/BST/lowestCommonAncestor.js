// Leetcode: 1650. Lowest Common Ancestor of a Binary Tree III
// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-iii/
// Easy
// Given two nodes of a binary tree p and q, return their lowest common ancestor (LCA).
// Each node will have a reference to its parent node. The definition for Node is:
// class Node {
//     public int val;
//     public Node left;
//     public Node right;
//     public Node parent;
// }
// According to the definition of LCA on Wikipedia: "The lowest common ancestor of two nodes p and q in a tree T is the lowest node that has both p and q as descendants (where we allow a node to be a descendant of itself)."

// solution I found on Leetcode Discussion, then I redid by memory
var lowestCommonAncestor = function (p, q) {
  let pDepth = getDepth(p);
  let qDepth = getDepth(q);

  while (pDepth != qDepth) {
    if (pDepth > qDepth) {
      p = p.parent;
      pDepth--;
    } else {
      q = q.parent;
      qDepth--;
    }
  }

  while (p !== q) {
    p = p.parent;
    q = q.parent;
  }

  return p;
};

function getDepth(node) {
  let depth = 0;
  while (node) {
    node = node.parent;
    depth++;
  }
  return depth;
}

// my first attempt which didn't work. I think the main issue was that I was trying to use a set to filter out the common elements, but I think that was not working because the nodes were not the same object in memory, so they were not being recognized as the same object. I think that is why the solution above works, because it is comparing the nodes by their values, rather than by their memory location.
var lowestCommonAncestor = function (p, q) {
  function getPath(node) {
    let path = [];
    let currentNode = node;

    while (currentNode.parent !== null) {
      path.push(currentNode);
      currentNode = currentNode.parent;
    }
    path.push(currentNode);
    return path;
  }

  // create paths for each node going up each parent to the top
  let pathP = getPath(p);
  let pathQ = getPath(q);

  // filter out one of the arrays to include only elements from the other array
  let filtered = pathP.filter((node) => pathQ.includes(node));

  // return the last element of that array
  let result = filtered[filtered.length - 1];
  console.log("result", result);
  return result;
};

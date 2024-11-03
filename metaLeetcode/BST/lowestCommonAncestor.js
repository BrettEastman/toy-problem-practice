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

// #### **Time Complexity: O(h)**

//  Function:** Traverses from a node to the root, taking O(h) time for each node (p and q). Here, `h` represents the height of the tree or the distance from a node to the root.
//   - **Aligning Depths:** In the worst case, one node is at the maximum depth `h`, and the other is at the root. Adjusting depths takes O(h) time.
//   - **Finding LCA:** Traverses upwards simultaneously from both nodes until the common ancestor is found, taking at most O(h) time.
//   - **Overall:** Each step is linear relative to the height, resulting in O(h) time complexity.

// #### **Space Complexity: O(1)**
// - **Explanation:**
//   - **Variables:** Uses a constant amount of extra space (pDepth, qDepth, and temporary pointers).
//   - **No Additional Data Structures:** Does not utilize any data structures that grow with input size.
//   - **Overall:** Constant space usage regardless of tree size.

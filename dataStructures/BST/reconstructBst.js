// The pre-order traversal of a Binary Search Tree (BST) is a traversal technique that starts with the root node of the BST and visits the nodes in the following order: current node, left subtree, right subtree. Given a non-empty array of integers representing the pre-order traversal of a Binary Search Tree (BST), write a function that creates the relevant BST and returns its root node.
// The input array will contain the values of BST nodes in the order in which these nodes would be visited with a pre-order traversal.
// In other words, the array represents the sequence or path of each node we visit during a pre-order traversal. So, it is like we are reverse engineering the array.

// Each BST node has an integer value, a left child node, and a right child node. A node is said to be a valid BST node if and only if it satisfies the BST property: its value is strictly greater than the values of every node to its left; its value is less than or equal to the values of every node to its right; and its children nodes are either valid BST nodes themselves or None / null.

// This is an input class. Do not edit.
class BST {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

let examplePreOrderTraversalValues = [10, 4, 2, 1, 5, 17, 19, 18];

// We create this class simply to hold a global variable for the current root index
class TreeInfo {
  constructor(rootIndex) {
    this.rootIndex = rootIndex;
  }
}

function reconstructBst(preOrderTraversalValues) {
  // Here we have a global variable to keep track of whatever rootIndex we are on. We create the variable starting at zero
  // Then instead of slicing arrays, we will keep track of the lower and upper bounds, starting at negative and positive infinity
  const treeInfo = new TreeInfo(0);
  return reconstructBstFromRange(
    -Infinity,
    Infinity,
    preOrderTraversalValues,
    treeInfo
  );
}

function reconstructBstFromRange(
  lowerBound,
  upperBound,
  preOrderTraversalValues,
  currentTreeInfo
) {
  // first thing we want to do is check to see if our rootIndex is the same as the length of our preOrderTraversalValues array. If so, then we have gone through all of the nodes meaning we are done and can just return the root node.
  if (currentTreeInfo.rootIndex === preOrderTraversalValues.length) return null;

  let rootValue = preOrderTraversalValues[currentTreeInfo.rootIndex];
  if (rootValue < lowerBound || rootValue >= upperBound) return null;

  currentTreeInfo.rootIndex++;
  // then when we move down to the left node (node 4), the upper will change to 10, however the lower will still remain -Infinity
  // then when we go to left node (node 2), the lower bound still remains -Infinity, but the upper is changed to 4
  // then node 1 will be lower -Infinity and upper 2
  // but the right node (node 5), will be lower 4 and upper 10
  let leftSubTree = reconstructBstFromRange(
    lowerBound,
    rootValue,
    preOrderTraversalValues,
    currentTreeInfo
  );
  // for the right node (node 17) we will change the lower to 10 and the upper will remain Infinity
  // then for the next right (node 19), the lower is 17 and upper is Infinity
  // etc.
  let rightSubTree = reconstructBstFromRange(
    rootValue,
    upperBound,
    preOrderTraversalValues,
    currentTreeInfo
  );

  return new BST(rootValue, leftSubTree, rightSubTree);
}

console.log(reconstructBst(examplePreOrderTraversalValues));

// another possible solution:
// first step is to find the right child node:
// for loop through preOrderTraversalValues until we find first value that is more than mainBST root (10), in this case 17, make note of this index (5). It will be the right child
// let rightIndex = 5
// we already know that the left child node is 4 because it is the first value less than the root
// Since we now have the left and right child, we can recursively call the function on each of those nodes
// Recursively call function with arr from left child to first value greater than it: reconstructBst([4,2,1,5]). We know that 2 is the left child since it is less than 4, then we find the right child is 5
// Now we recursively call the function on [2,1]
// we then create a BST with value = 2, left = 1, right = None
// at this point we start working backwards, we return node 2 to node 4
// then node 4 now needs to call the function on its right child, node 5
// once the right BST value 5 is returned to node 4, we can officially create the node 4 - new BST(4, 2, 5)

// A binary search tree is a way to store numbers in a specific order. It starts with a single number called the root. Then, we compare each new number to the root number. If the new number is smaller than the root, it goes to the left side of the root. If the new number is larger than the root, it goes to the right side of the root.
// For the numbers on the left side, we repeat the same process. Each new number is compared to the number already on the left side. If the new number is smaller, it goes to the left of that number. If it's larger, it goes to the right of that number.
// The same thing happens for the numbers on the right side of the root. Each new number is compared to the numbers already on the right side, and it's placed either to the left or right of those numbers based on whether it's smaller or larger.
// This process continues until all the numbers have been added to the tree. Smaller numbers end up on the left side of the tree, and larger numbers end up on the right side.
// To find a specific number in the tree, we start at the root. If the number we're looking for is smaller than the root, we go to the left side of the tree. If it's larger than the root, we go to the right side of the tree. We keep doing this, comparing the number to the numbers at each level of the tree, and going left or right based on whether the number is smaller or larger. Eventually, we'll either find the number we're looking for or reach the end of the tree without finding it.

// *A helpful note to keep in mind is that the left side of the tree will always have smaller numbers than the root, and the right side of the tree will always have larger numbers than the root. You can think of the root as being the middle of the tree. The next largest value after the root will be the last value on the leftmost branches of the right side of the tree, and the next smallest value after the root will be the first value on the left side of the tree.

// Write a BST class for a binary search tree. The class should support:

// -Inserting values with the insert method
// -Removing values with the remove method; this method should only remove the first instance of a given value
// -Searching for values with the contains method

// Note that you can’t remove values from a single node tree. In other words, calling the remove method on a single no tree should simply not do anything.

// Each BST note has an integer value, a left child node, and a right child node. A node is said to be a valid BST node, if an only if it satisfies the BST property: its value is strictly greater than the values of every node to its left; its value is less than or equal to the values of every node to its right; and it’s children nodes are either valid BST nodes themselves, or none/null.

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
    return this;
  }

  contains(value) {
    if (value < this.value) {
      if (this.left === null) {
        return false;
      } else {
        return this.left.contains(value);
      }
    } else if (value > this.value) {
      if (this.right === null) {
        return false;
      } else {
        return this.right.contains(value);
      }
    } else {
      return true;
    }
  }

  getMinValue() {
    if (this.left === null) {
      return this.value;
    } else {
      return this.left.getMinValue();
    }
  }

  remove(value, parent = null) {
    // First, use recursion to go down the tree until we find the value
    if (value < this.value) {
      if (this.left !== null) {
        // if so, then call remove on this.left, while also keeping track of the parent(this) as a second argument
        this.left.remove(value, this);
      }
      // otherwise if value is greater than this.value
    } else if (value > this.value) {
      // call remove on this.right
      if (this.right !== null) {
        this.right.remove(value, this);
      }
      // otherwise, if it is not greater than or less than, then we've found it! Now the real logic happens:
    } else {
      // if the BST (this) has both a left and right value
      if (this.left !== null && this.right !== null) {
        // then this means we need to replace this.value (the head of the current BST) with the minimum value of the right branch (which is always guaranteed to be greater than this.value)
        // we do this by getting the min value with a helper function, then replacing this.value
        this.value = this.right.getMinValue();
        // then we also need to remove that min value from the right branch
        this.right.remove(this.value, this);
        // if the BST doesn't have a parent
      } else if (parent === null) {
        // but it HAS a left value (which now means it only has a left value, not a right)
        if (this.left !== null) {
          // then we are cutting it off by changing this.value, this.right, etc to this.left.value, this.left.right, etc
          // note that the order matters here! It is because we need to change this.value first, otherwise we will lose the value we are trying to remove
          // before we change this.left, we need to change this.value and this.right
          this.value = this.left.value;
          this.right = this.left.right;
          this.left = this.left.left;
          // otherwise it doesn't have a parent but has a right value (i.e. no left)
        } else if (this.right !== null) {
          // then cut off by changing everything to this.right
          // again, order matters here
          this.value = this.right.value;
          this.left = this.right.left;
          this.right = this.right.right;
          // otherwise this means it is a single node tree and we don't want to do anything
        } else {
          // do nothing;
        }
        // otherwise if it is the left child of a parent
      } else if (parent.left === this) {
        // In the example below, the call stack eventually reaches the original 12 we want to remove, which has left and right values of null, and its parent is 13. So then 13.left becomes this.right (12.right), which is null. This is how we eventually just cut off the node (12) that we want to remove.
        parent.left = this.left !== null ? this.left : this.right;
        // otherwise if it is the right child
      } else if (parent.right === this) {
        parent.right = this.right !== null ? this.right : this.left;
      }
    }
    return this;
  }
}

let newBST = new BST(10);
newBST.insert(5);
newBST.insert(15);
newBST.insert(2);
newBST.insert(5);
newBST.insert(13);
newBST.insert(22);
newBST.insert(1);
newBST.insert(14);
newBST.insert(12);
newBST.remove(10);
console.log(newBST); // should return the following:
// {
//   value: 12,
//   left: {
//     value: 5,
//     left: {
//       value: 2,
//       left: {
//         value: 1,
//         left: null,
//         right: null
//       },
//       right: null
//     },
//     right: {
//       value: 5,
//       left: null,
//       right: null
//     }
//   },
//   right: {
//     value: 15,
//     left: {
//       value: 13,
//       left: null,
//       right: {
//         value: 14,
//         left: null,
//         right: null
//       }
//     },
//     right: {
//       value: 22,
//       left: null,
//       right: null
//     }
//   }
// }

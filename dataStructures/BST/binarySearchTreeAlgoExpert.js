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
    // check to see value is less than this.value
    if (value < this.value) {
      // then check if this.left is not null
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
        // move the parent down the tree by changing parent.left into this.left (if not null) otherwise this.right
        parent.left = this.left !== null ? this.left : this.right;
        // otherwise if it is the right child
      } else if (parent.right === this) {
        // move parent down the tree by changing parent.right to this.left (if not null) otherwise this.right
        parent.right = this.right !== null ? this.right : this.left;
      }
    }
    return this;
  }
}

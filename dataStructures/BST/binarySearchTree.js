class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (value === current.value) return undefined;
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if (value > current.value) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }
  // my recursive solution (untested)
  // insert(value) {
  //   let newNode = new Node(value);
  //   if (!this.root) {
  //     this.root = newNode;
  //     return this;
  //   }
  //   function recursive(node, bstNode) {
  //     if (node < bstNode) {
  //       if (!bstNode.left) {
  //         bstNode.left = node;
  //       } else {
  //         recursive(node, bstNode.left);
  //       }
  //     } else {
  //       if (!bstNode.right) {
  //         bstNode.right = node;
  //       } else {
  //         recursive(node, bstNode.right);
  //       }
  //     }
  //   }
  //   recursive(newNode, this.root);
  //   return this;
  // }

  // in this version, we are looking to see if it's there and if so, we return that node. A simpler version of this could be called "contains" and would just return a boolean, true if there, false if not.
  find(value) {
    if (!this.root) {
      return false;
    }
    let current = this.root;
    let found = false;
    while (current && !found) {
      if (current.value < value) {
        current = current.right;
      } else if (current.value > value) {
        current = current.left;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current;
  }
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(2);
// console.log(tree);
console.log(tree.find(10));
// tree.find(2);

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

  find(value) {
    if (!this.root) {
      return false;
    } else {
      if (this.root.value === value) {
        return true;
      }
    }
  }
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(2);
console.log(tree);

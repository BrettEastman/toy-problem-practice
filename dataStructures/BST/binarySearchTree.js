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
    }

    function recursive(node, bstNode) {
      if (node < bstNode) {
        if (!bstNode.left) {
          bstNode.left = node;
        } else {
          recursive(node, bstNode.left);
        }
      } else {
        if (!bstNode.right) {
          bstNode.right = node;
        } else {
          recursive(node, bstNode.right);
        }
      }
    }

    recursive(newNode, this.root);
    return this;
  }
}

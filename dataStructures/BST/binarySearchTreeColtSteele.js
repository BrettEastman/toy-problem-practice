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

  BFS() {
    let node = this.root;
    let data = [];
    let queue = [];

    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    return data;
  }

  DFSPreOrder() {
    let current = this.root;
    let data = [];

    function recurse(node) {
      data.push(node.value);
      // could also write this logic as:
      // node.left && recurse(node.left)
      // it's possibly more succinct, but really just means the same thing, so your choice
      if (node.left) recurse(node.left);
      if (node.right) recurse(node.right);
    }

    recurse(current);

    return data;
  }

  DFSPostOrder() {
    let current = this.root;
    let data = [];

    function recurse(node) {
      if (node.left) recurse(node.left);
      if (node.right) recurse(node.right);
      data.push(node.value);
    }

    recurse(current);

    return data;
  }

  DFSInOrder() {
    let current = this.root;
    let data = [];

    function recurse(node) {
      if (node.left) recurse(node.left);
      data.push(node.value);
      if (node.right) recurse(node.right);
    }

    recurse(current);

    return data;
  }
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
console.log(tree.BFS()); // [ 10, 6, 15, 3, 8, 20 ]
console.log(tree.DFSPreOrder()); // [ 10, 6, 3, 8, 15, 20 ]
console.log(tree.DFSPostOrder()); // [ 3, 8, 6, 20, 15, 10 ]
console.log(tree.DFSInOrder()); // [ 3, 6, 8, 10, 15, 20 ]

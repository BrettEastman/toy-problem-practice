class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  // their version - here, they include the empty array as a first argument, which is different than the Colt Steele version
  depthFirstSearch(array) {
    array.push(this.name);
    this.children.forEach((child) => {
      child.depthFirstSearch(array);
    });
    return array;
  }

  // my version, based on Colt Steele's version
  breadthFirstSearch(array) {
    const queue = [this];
    const visited = {};
    visited[this.name] = true;
    let current;

    while (queue.length) {
      current = queue.shift();
      array.push(current.name);
      current.children.forEach((child) => {
        if (!visited[child.name]) {
          visited[child.name] = true;
          queue.push(child);
        }
      });
    }
    return array;
  }
}

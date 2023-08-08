class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }


  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) { // while there is a next node
      newTail = current; // set newTail to current
      current = current.next;
    }
    this.tail = newTail; // set tail to newTail
    this.tail.next = null;
    this.length--;
    if (this.length === 0) { // if there is only one node
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    if (!this.head) return undefined;
    let originalHead = this.head;
    this.head = originalHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return originalHead;
  }

  unshift(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index >= this.length || index < 0) return null;
    let counter = 0;
    let currentNode = this.head
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  set(index, value) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.value = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    // If the index is less than zero or greater than the length, return falls
    if (index < 0 || index > this.length) return false;
    // If the index is the same as the length, push a new note to the end of the list
    if (index === this.length) {
      this.push(value);
      return true;
    }
    // if the index is zero, on shift a new note to the start of the list
    if (index === 0) {
      this.unshift(value);
      return true;
    }
    let newNode = new Node(value);
    // Otherwise, using the get method, access the node at the index -1
    let prevNode = this.get(index - 1);
    let temp = prevNode.next;
    // Set the next property on that node to be the new node.
    prevNode.next = newNode;
    // Set the next property on the new node to be the previous next
    newNode.next = temp;
    this.length++;
    return true;
  }

  remove(index, value) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === this.length - 1) {
      return this.pop();
    }
    if (index === 0) {
      return this.shift();
    }
    let prevNode = this.get(index - 1);
    let removed = prevNode.next;
    prevNode.next = removed.next;
    this.length--;
    return removed;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}

let list = new SinglyLinkedList();

list.push("1");
list.push("2");
list.push("3");
list.push("4");
list.push("5");
list.push("6");
// console.log('list before unshift: ', list);
// list.unshift('first');
// list.push('last');
// console.log('list after unshift and push: ', list);
// console.log('list get 5: ', list.get(5));
// list.insert(0, 'first');
list.insert(5, 'middle');
console.log('list: ', list);
console.log('list.head: ', list.head);

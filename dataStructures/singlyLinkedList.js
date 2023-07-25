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
      this.tail = this.head
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

let list = new SinglyLinkedList();

list.push("1");
list.push("2");
list.push("3");
list.push("4");
list.push("5");
list.push("6");
console.log('list before pop: ', list);
list.pop();
console.log('list after pop: ', list);

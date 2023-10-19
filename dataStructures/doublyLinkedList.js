class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    // Create a new node with the value past to the function,
    let newNode = new Node(value);
    // If the head property is null, set the head and tail to be the newly created node
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // If not set the next property on the tail to be that node
      this.tail.next = newNode;
      // Set the previous property on the newly created node to be the tail
      newNode.prev = this.tail;
      // Set the tail to be the newly created node
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    // If there is no head, return undefined
    if (!this.head) return undefined;
    // Store the current tail in a var to return later
    let popVal = this.tail;
    // if the length is 1, set head and tail to null
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      // update the tail to be the previous Node.
      this.tail = popVal.prev;
      // Set the newTail's next to null
      this.tail.next = null;
      // sever the old connections to the doublyLinkedList that the popped value used to have
      popVal.prev = null;
    }
    // Decremenent the length
    this.length--;
    // Return the value removed
    return popVal;
  }

  shift() {
    if (!this.head) return undefined;
    // store current head property in a variable called old head
    let oldHead = this.head;
    // if the length is one, set the head to  be null, set the tail to be null
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      // update the head to be the next of the old head
      this.head = oldHead.next;
      // set the head's prev property to null
      this.head.prev = null;
      // set the old head's next to null
      oldHead.next = null;
    }
    // decrement the length
    this.length--;
    // return old head
    return oldHead;
  }

  unshift(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let oldHead = this.head;
      oldHead.prev = newNode;
      newNode.next = oldHead;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  // my solution
  get(index) {
    if (index >= this.length || index < 0) return null;
    let mid = Math.floor(this.length / 2);
    let current, counter;
    if (index <= mid) {
      counter = 0;
      current = this.head;
      while (counter !== index) {
        current = current.next;
        counter++;
      }
    } else {
      counter = this.length - 1;
      current = this.tail;
      while (counter !== index) {
        current = current.prev;
        counter--;
      }
    }
    return current;
  }
}

let list = new DoublyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.push(6);
list.push(7);
list.push(8);
// console.log("list", list);
// let shifted = list.shift();
// console.log("list after shift", list, "shifted node:", shifted);
// list.unshift("blah blah");
// console.log("after unshifted: ", list);
let currentGet = list.get(7);
console.log("currentGet: ", currentGet);

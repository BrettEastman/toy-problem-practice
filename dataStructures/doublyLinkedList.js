class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList() {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) { // add to end
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
// Stack: An array-like data structure that follows the LIFO (Last In First Out) principle. The last element added to the stack will be the first element removed from the stack.
// A stack is an abstract data type that serves as a collection of elements, with two main principal operations: push, which adds an element to the collection, and pop, which removes the most recently added element that was not yet removed.
// A stack is often compared to a stack of books on a table: the last book that's place on the stack of books is the first one that's taken off the stack.

// utility class to create a node
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// A stack is an abstract concept that can be created in many different ways, but the most important thing is to make sure insertion and removal are constant time: O(1)
class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  // we are using the names "push" and "pop" because it is how we would do it if we were creating a Stack using an array, but in reality these methods are a bit more like unshift and shift.
  push(value) {
    let newNode = new Node(value);
    if (!this.length) {
      this.first = newNode;
      this.last = newNode;
    }
    if (this.length > 0) {
      let oldFirst = this.first;
      this.first = newNode;
      this.first.next = oldFirst;
    }
    this.length++;
    return this.length;
  }

  pop() {
    if (!this.length) {
      return null;
    }
    let result = this.first;
    if (this.length === 1) {
      // We don't need to do this.first = null because later on, this.first = this.first.next takes care of making this.first equal to null.
      // this.first = null;
      this.last = null;
    }
    this.first = this.first.next;
    this.length--;
    return result.value;
  }
}

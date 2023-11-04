class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// enqueue will add to the end (like push), whereas dequeue will remove from the beginning (like shift)

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  enqueue(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this.length;
  }
  dequeue() {
    if (!this.first) return null;

    let temp = this.first;

    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.length--;
    return temp.value;
  }
  // my original version of dequeue
  // dequeue() {
  //   let result;
  //   if (!this.first) return null;
  //   if (this.length === 1) {
  //     result = this.first;
  //     this.first = null;
  //     this.last = null;
  //   }
  //   if (this.length > 0) {
  //     result = this.first;
  //     let newFirst = this.first.next;
  //     this.first.next = null;
  //     this.first = newFirst;
  //   }
  //   this.length--;
  //   return result;
  // }
}

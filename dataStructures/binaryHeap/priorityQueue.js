class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

// This is an example of a minBinaryHeap which uses a priority queue to add and remove items based on priority
// This is all basically the Colt Steele version, but I changed the names of some of the variables
class PriorityQueue {
  constructor() {
    this.values = [];
  }

  // same as insert
  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.values.length - 1;
    const item = this.values[index];
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      const parentItem = this.values[parentIndex];
      if (item.priority >= parentItem.priority) break;
      this.values[parentIndex] = item;
      this.values[index] = parentItem;
      index = parentIndex;
    }
  }

  // same as removeMin - we are just removing the top node (minimum), replacing it with the last node, then sifting that node down to its right place
  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.siftDown();
    }
    return min;
  }

  // Colt Steele's version - not sure I like the look of it, but it gets the job done
  siftDown() {
    let index = 0;
    const length = this.values.length;
    const item = this.values[0];

    while (true) {
      let leftChildIndex = index * 2 + 1;
      let rightChildIndex = index * 2 + 2;
      let indexToSwap = null;
      let leftChild;
      let rightChild;

      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex];
        if (leftChild.priority < item.priority) {
          indexToSwap = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];
        if (
          (indexToSwap === null && rightChild.priority < item.priority) ||
          (indexToSwap !== null && rightChild.priority < leftChild.priority)
        ) {
          indexToSwap = rightChildIndex;
        }
      }

      if (indexToSwap === null) break;
      this.values[index] = this.values[indexToSwap];
      this.values[indexToSwap] = item;
      index = indexToSwap;
    }
  }
}

let ER = new PriorityQueue();
ER.enqueue("common cold", 5);
ER.enqueue("gunshot wound", 1);
ER.enqueue("high fever", 4);
ER.enqueue("broken arm", 2);
ER.enqueue("glass in foot", 3);

console.log("ER:", ER);

ER.dequeue();
console.log("ER:", ER);

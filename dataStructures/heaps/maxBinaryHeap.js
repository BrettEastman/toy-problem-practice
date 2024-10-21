// Binary Heaps are either MaxBinaryHeaps or MinBinaryHeaps with parents either being smaller or larger than their children
// Binary Heaps are very useful data structures for sorting, and implementing other data structures like priority queues
// Although conceptually, heaps are trees, with just a little bit of math, we represent them using arrays

// in a max binary heap, parent nodes are always larger than child nodes, which means the largest value is always the root node
// in a min binary heap, parent nodes are always smaller than child nodes, which means the smallest value is always the root node

class BinaryHeap {
  constructor() {
    this.values = [];
    // sample values for testing
    // this.values = [41, 33, 27, 18, 13];
  }
  // my version which uses recursion. To insert a value, you push it to the end of the array, then use the bubbleUp method to place it in its correct spot.
  insert(value) {
    this.values.push(value);
    let valIndex = this.values.length - 1;
    this.bubbleUp(valIndex);
  }

  bubbleUp(valueIndex) {
    // to find the parent index of a node in the BinaryHeap.values array, we use the formula: (nodeIndex - 1) / 2
    let parentIndex = Math.floor((valueIndex - 1) / 2);
    if (this.values[valueIndex] > this.values[parentIndex]) {
      [this.values[valueIndex], this.values[parentIndex]] = [
        this.values[parentIndex],
        this.values[valueIndex],
      ];
      valueIndex = parentIndex;
      if (valueIndex > 0) {
        this.bubbleUp(valueIndex);
      }
    }
  }

  // my version - works well and is more versatile because it can be called on any index
  // we start by swapping the first and last items in the array, then sift down the first one until it gets to its correct spot
  removeMax(index = 0) {
    let lastIndex = this.values.length - 1;
    [this.values[index], this.values[lastIndex]] = [
      this.values[lastIndex],
      this.values[index],
    ];
    let result = this.values.pop();
    this.siftDown(index);
    return result;
  }

  siftDown(index) {
    let leftChildIndex =
      2 * index + 1 <= this.values.length - 1 ? 2 * index + 1 : null;
    let rightChildIndex =
      2 * index + 2 <= this.values.length - 1 ? 2 * index + 2 : null;
    let largestChildIndex;
    if (leftChildIndex && rightChildIndex) {
      if (this.values[leftChildIndex] > this.values[rightChildIndex]) {
        largestChildIndex = leftChildIndex;
      } else {
        largestChildIndex = rightChildIndex;
      }
    } else if (leftChildIndex) {
      largestChildIndex = leftChildIndex;
    } else if (rightChildIndex) {
      largestChildIndex = rightChildIndex;
    }
    if (
      largestChildIndex !== undefined &&
      this.values[index] < this.values[largestChildIndex]
    ) {
      [this.values[index], this.values[largestChildIndex]] = [
        this.values[largestChildIndex],
        this.values[index],
      ];
      this.siftDown(largestChildIndex);
    }
  }
}

let BH = new BinaryHeap();
BH.insert(55);
BH.insert(15);
BH.insert(44);
BH.insert(77);
BH.insert(3);
BH.insert(18);
BH.insert(222);
// let removal = BH.removeMax(1);

console.log("BH", BH);
// console.log("removal:", removal);

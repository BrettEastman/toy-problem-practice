class MinHeap {
  constructor() {
    this.heap = [];
  }
  buildHeap(arr) {
    for (let i = 0; i < arr.length; i++) {
      this.insert(arr[i]);
    }
  }
  parentIndex(index) {
    return Math.floor((index - 1) / 2);
  }
  leftChildIndex(index) {
    return 2 * index + 1;
  }
  rightChildIndex(index) {
    return 2 * index + 2;
  }
  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }
  insert(val) {
    this.heap.push(val);
    this.heapifyUp(this.heap.length - 1);
  }
  removeMin() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();
    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown(0);
    return min;
  }
  heapifyUp(index) {
    let currIndex = index;
    while (
      currIndex > 0 &&
      this.heap[currIndex] < this.heap[this.parentIndex(currIndex)]
    ) {
      this.swap(currIndex, this.parentIndex(currIndex));
      currIndex = this.parentIndex(currIndex);
    }
  }
  heapifyDown(index) {
    // make currSmallestIndex = index
    let currSmallestIndex = index;
    // get left and right child indexes
    let leftChildIndex = this.leftChildIndex(index);
    let rightChildIndex = this.rightChildIndex(index);
    // if statements for each to determine if the child is smaller, and if so, then make currSmallestIndex equal to that childindex
    if (
      leftChildIndex < this.heap.length &&
      this.heap[currSmallestIndex] > this.heap[leftChildIndex]
    ) {
      currSmallestIndex = leftChildIndex;
    }
    if (
      rightChildIndex < this.heap.length &&
      this.heap[currSmallestIndex] > this.heap[rightChildIndex]
    ) {
      currSmallestIndex = rightChildIndex;
    }
    if (currSmallestIndex !== index) {
      // if currSmallestIndex does not equal index, then swap the two items
      this.swap(currSmallestIndex, index);
      // then call heapifyDown recursively on that index
      this.heapifyDown(currSmallestIndex);
    }
  }
}

let minHeap = new MinHeap();
minHeap.buildHeap([2, 3, 1, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
console.log(minHeap);
minHeap.insert(0);
console.log(minHeap);

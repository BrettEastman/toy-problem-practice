class MinHeap {
  constructor() {
    this.heap = [];
  }

  // Helper methods to get parent and child indices
  parentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  leftChildIndex(index) {
    return 2 * index + 1;
  }

  rightChildIndex(index) {
    return 2 * index + 2;
  }

  // Swap two elements in the heap
  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  // Insert a new element into the heap
  insert(val) {
    this.heap.push(val);
    this.heapifyUp(this.heap.length - 1);
  }

  // Remove and return the smallest element (root) from the heap
  extractMin() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown(0);
    return min;
  }

  // Heapify up to maintain heap property after insertion
  heapifyUp(index) {
    let currentIndex = index;
    while (
      currentIndex > 0 &&
      this.heap[currentIndex] < this.heap[this.parentIndex(currentIndex)]
    ) {
      this.swap(currentIndex, this.parentIndex(currentIndex));
      currentIndex = this.parentIndex(currentIndex);
    }
  }

  // Heapify down to maintain heap property after extraction
  heapifyDown(index) {
    let smallest = index;
    const leftIndex = this.leftChildIndex(index);
    const rightIndex = this.rightChildIndex(index);

    if (
      leftIndex < this.heap.length &&
      this.heap[leftIndex] < this.heap[smallest]
    ) {
      smallest = leftIndex;
    }

    if (
      rightIndex < this.heap.length &&
      this.heap[rightIndex] < this.heap[smallest]
    ) {
      smallest = rightIndex;
    }

    if (smallest !== index) {
      this.swap(index, smallest);
      this.heapifyDown(smallest);
    }
  }

  // Get the smallest element without removing it
  getMin() {
    return this.heap.length > 0 ? this.heap[0] : null;
  }

  // Get the size of the heap
  size() {
    return this.heap.length;
  }
}

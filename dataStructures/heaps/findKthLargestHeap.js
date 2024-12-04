// Leetcode: 215. Kth Largest Element in an Array
// URL: https://leetcode.com/problems/kth-largest-element-in-an-array/
// Time: O(n) average case, O(n^2) worst case
// Space: O(1)

// Given an integer array nums and an integer k, return the kth largest element in the array.
// Note that it is the kth largest element in the sorted order, not the kth distinct element.
// Can you solve it without sorting?

// Explanation:
// The algorithm efficiently finds the kth largest number by dividing the list into smaller parts and focusing only on the part that contains the kth largest number. This way, it avoids sorting the entire list, making it faster on average.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  // get complementK (for the for loop later on)
  let complementK = nums.length - k;
  // create minHeap class with the following properties: parentIndex, leftChildIndex, rightChildIndex, swap, insert, removeMin, heapifyUp, heapifyDown
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

  // create a new MinHeap of nums (automatically sorted)
  let minHeap = new MinHeap();
  minHeap.buildHeap(nums);

  // for complementK times, remove min,
  for (let i = 0; i < complementK; i++) {
    minHeap.removeMin();
  }

  // then remove min once more and return it
  return minHeap.removeMin();
};

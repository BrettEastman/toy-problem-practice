// Algoexpert: https://www.algoexpert.io/questions/min-heap-construction
// Do not edit the class below except for the buildHeap,
// siftDown, siftUp, peek, remove, and insert methods.
// Feel free to add new properties and methods to the class.
class MinHeap {
  constructor(array) {
    this.heap = this.buildHeap(array);
  }

  buildHeap(array) {
    const firstParentIdx = Math.floor((array.length - 2) / 2);
    for (let currentIdx = firstParentIdx; currentIdx >= 0; currentIdx--) {
      this.siftDown(currentIdx, array.length - 1, array);
    }
    return array;
  }

  siftDown(currentIdx, endIdx, heap) {
    let childOneIdx = currentIdx * 2 + 1;
    while (childOneIdx <= endIdx) {
      const childTwoIdx =
        currentIdx * 2 + 2 <= endIdx ? currentIdx * 2 + 2 : -1;
      let idxToSwap;
      if (childTwoIdx !== -1 && heap[childTwoIdx] < heap[childOneIdx]) {
        idxToSwap = childTwoIdx;
      } else {
        idxToSwap = childOneIdx;
      }
      if (heap[idxToSwap] < heap[currentIdx]) {
        [heap[idxToSwap], heap[currentIdx]] = [
          heap[currentIdx],
          heap[idxToSwap],
        ];
        currentIdx = idxToSwap;
        childOneIdx = currentIdx * 2 + 1;
      } else {
        return;
      }
    }
  }

  siftUp(currentInd, heap) {
    heap = this.heap;
    currentInd = heap.length - 1;
    let parentInd;

    while (currentInd > 0) {
      parentInd = Math.floor((currentInd - 1) / 2);
      // if value at the parent index is greater than val at currentInd
      if (heap[parentInd] > heap[currentInd]) {
        // swap the two
        [heap[parentInd], heap[currentInd]] = [
          heap[currentInd],
          heap[parentInd],
        ];
      }
      currentInd = parentInd;
    }
  }

  peek() {
    return this.heap[0];
  }

  remove() {
    [this.heap[0], this.heap[this.heap.length - 1]] = [
      this.heap[this.heap.length - 1],
      this.heap[0],
    ];
    let returnVal = this.heap.pop();
    this.siftDown(0, this.heap.length - 1, this.heap);
    return returnVal;
  }

  insert(value) {
    this.heap.push(value);
    this.siftUp(this.heap.length - 1, this.heap);
  }
}

let minHeap = new MinHeap([2, 3, 1, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
console.log(minHeap.heap);
console.log(minHeap.peek());
minHeap.insert(0);
console.log(minHeap);
console.log(minHeap.peek());
console.log(minHeap.remove());
console.log(minHeap);

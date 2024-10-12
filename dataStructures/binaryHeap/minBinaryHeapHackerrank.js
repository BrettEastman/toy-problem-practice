// In Hackerrank problems, you are asked to process input in a readout of lines, and you are given the number of lines in the first line of the input, followed by the real input, which might mean one number per line which might correspond to each item of an array, for example. You can use the following code to process the input:
function processData(input) {
  let inputAll = input.split("\n");
  let heap = new MinBinaryHeap();
  for (let j = 1; j < inputAll.length; j++) {
    let currentQuery = inputAll[j].split(" ");
    let query = Number(currentQuery[0]);
    let val = Number(currentQuery[1]);
    if (query === 1) {
      heap.insert(val);
    } else if (query === 2) {
      heap.remove(val);
    } else {
      console.log(heap.values[0]);
    }
  }
}

class MinBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(value) {
    this.values.push(value);
    let valIndex = this.values.length - 1;
    this.bubbleUp(valIndex);
  }

  bubbleUp(valInd) {
    // calculate parent index
    let parentInd = Math.floor((valInd - 1) / 2);
    // compare val at valIndex to val at parent index
    if (this.values[parentInd] > this.values[valInd]) {
      [this.values[parentInd], this.values[valInd]] = [
        this.values[valInd],
        this.values[parentInd],
      ];
    }
    // make the valInd now become the parent ind
    valInd = parentInd;
    // recursively run bubble up on the parent ind
    if (valInd >= 0) {
      this.bubbleUp(valInd);
    }
  }

  remove(value) {
    let valIndex;
    for (let i = 0; i < this.values.length; i++) {
      if (this.values[i] === value) {
        valIndex = i;
      }
    }
    let lastIndex = this.values.length - 1;
    let temp = this.values[valIndex];
    this.values[valIndex] = this.values[lastIndex];
    this.values[lastIndex] = temp;
    this.values.pop();
    this.siftDown(valIndex);
  }

  siftDown(index) {
    let leftChildIndex =
      2 * index + 1 < this.values.length ? 2 * index + 1 : null;
    let rightChildIndex =
      2 * index + 2 < this.values.length ? 2 * index + 2 : null;
    let smallestChildIndex;
    if (leftChildIndex && rightChildIndex) {
      if (this.values[leftChildIndex] < this.values[rightChildIndex]) {
        smallestChildIndex = leftChildIndex;
      } else {
        smallestChildIndex = rightChildIndex;
      }
    } else if (leftChildIndex) {
      smallestChildIndex = leftChildIndex;
    } else {
      smallestChildIndex = rightChildIndex;
    }
    if (
      smallestChildIndex !== undefined &&
      this.values[index] > this.values[smallestChildIndex]
    ) {
      [this.values[smallestChildIndex], this.values[index]] = [
        this.values[index],
        this.values[smallestChildIndex],
      ];
      this.siftDown(smallestChildIndex);
    }
  }
}

// I didn't write this - it comes at the end of Hackerrank problems
process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
  processData(_input);
});

function minHeightBst(array) {
  return minHeightBstHelper(array, 0, array.length - 1);
}

// Write helper function with the following parameters: array, startIndex, endIndex)
function minHeightBstHelper(arr, startIndex, endIndex) {
  if (endIndex < startIndex) return null;
  let midIndex = Math.floor((startIndex + endIndex) / 2);
  let mainBST = new BST(arr[midIndex]);
  mainBST.left = minHeightBstHelper(arr, startIndex, midIndex - 1);
  mainBST.right = minHeightBstHelper(arr, midIndex + 1, endIndex);
  return mainBST;
}

// Given BST class - do not edit
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
  }
}

// this exercise was taken from https://www.hackerrank.com/challenges/binary-search-tree-insertion/problem
// it was very confusing to me because of they want you to display the answer in a specific way, and I didn't know how to do that. Also, the input is confusing because it is given in two lines that you have to split, and the first line is not needed.

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function insert(root, data) {
  if (root === null) {
    return new Node(data);
  }
  let current = root;
  for (;;) {
    if (data <= current.data) {
      if (current.left === null) {
        current.left = new Node(data);
        break;
      }
      current = current.left;
    } else {
      if (current.right === null) {
        current.right = new Node(data);
        break;
      }
      current = current.right;
    }
  }
  return root;
}

function displayAnswer(root) {
  if (!root) return;
  process.stdout.write(root.data + " ");
  displayAnswer(root.left);
  displayAnswer(root.right);
}

function processData(input) {
  // enter code here
  let nums = input.split("\n")[1].split(" ");
  let root = null;
  for (let i = 0; i < nums.length; i++) {
    let data = parseInt(nums[i]);
    root = insert(root, data);
  }
  displayAnswer(root);
}

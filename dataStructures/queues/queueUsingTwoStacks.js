// In this challenge, you must first implement a queue using two stacks. Then process queries, where each query is one of the following types:

// 1 x: Enqueue element  into the end of the queue.
// 2: Dequeue the element at the front of the queue.
// 3: Print the element at the front of the queue.
// Input Format

// The first line contains a single integer, , denoting the number of queries.
// Each line  of the  subsequent lines contains a single query in the form described in the problem statement above. All three queries start with an integer denoting the query , but only query  is followed by an additional space-separated value, , denoting the value to be enqueued.

// My solution where I decided the two stacks would be regular and reverse, and I would switch between them as needed, only using pop() and push() methods:
function queueUsingTwoStacks(input) {
  let inputLines = input.split("\n");
  let queriesLength = inputLines[0];
  let lines = inputLines.slice(1);
  let regStack = [];
  let reverseStack = [];
  let isRegOrderStack = true;

  for (let i = 0; i < queriesLength; i++) {
    let currLine = lines[i];
    if (currLine[0] === "1") {
      let x = currLine.split(" ")[1];
      if (isRegOrderStack) {
        regStack.push(x);
      } else {
        while (reverseStack.length > 0) {
          regStack.push(reverseStack.pop());
        }
        regStack.push(x);
        isRegOrderStack = true;
      }
    } else if (currLine[0] === "2") {
      if (isRegOrderStack) {
        while (regStack.length > 1) {
          reverseStack.push(regStack.pop());
        }
        regStack.pop();
        isRegOrderStack = false;
      } else {
        reverseStack.pop();
      }
    } else {
      if (isRegOrderStack) {
        console.log(regStack[0]);
      } else {
        console.log(reverseStack[reverseStack.length - 1]);
      }
    }
  }
}

let exampleInput = "10\n1 42\n2\n1 14\n3\n1 28\n3\n1 60\n1 78\n2\n2";
// which would look like this:
// 10
// 1 42
// 2
// 1 14
// 3
// 1 28
// 3
// 1 60
// 1 78
// 2
// 2

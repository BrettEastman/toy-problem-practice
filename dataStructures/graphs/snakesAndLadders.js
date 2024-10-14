// my recreation of a solution from Discussion, that I converted from Java to JS and turned from a class into a function. And I renamed all of the variables to be descriptive
function quickestWayUp(ladders, snakes) {
  // create Map constructors of both ladders and snakes, to have as a reference
  let laddersMap = new Map();
  let snakesMap = new Map();

  for (let ladder of ladders) {
    laddersMap.set(ladder[0], ladder[1]);
  }
  for (let snake of snakes) {
    snakesMap.set(snake[0], snake[1]);
  }
  // create an adjacencyList arr for ever place (up to 101 to be 1-indexed?)
  // Note, that you cannot do Array(101).fill([]) because that creates one array in memory that is shared by all of the elements, rather than create a new empty array for each element
  let adjacencyList = Array.from({ length: 101 }, () => []);
  for (let i = 1; i < adjacencyList.length; i++) {
    for (let j = 1; j <= 6; j++) {
      let toSpace = i + j;
      if (toSpace <= 100) {
        if (laddersMap.has(toSpace)) {
          adjacencyList[i].push(laddersMap.get(toSpace));
        } else if (snakesMap.has(toSpace)) {
          adjacencyList[i].push(snakesMap.get(toSpace));
        } else {
          adjacencyList[i].push(toSpace);
        }
      }
    }
  }

  // But, you CAN use .fill for this array since you are just creating a real number for each element
  let numOfMovesToStart = new Array(101).fill(Number.MAX_SAFE_INTEGER);
  // We start off by putting 1 in the queue, so it will be the first square in line
  let queue = [1];
  // we already know the number of moves from 1 to 1 is 0
  numOfMovesToStart[1] = 0;

  // Now we iterate through the queue (while also adding to the queue). This is the heart of the breadth-first search technique.
  while (queue.length > 0) {
    // You start at square 1. From square 1, you can move to squares 2, 3, 4, 5, 6, or 7.
    let currSquare = queue.shift();

    for (let neighbor of adjacencyList[currSquare]) {
      // numOfMovesToStart[currSquare] tells us the amount of moves back to 1, so this is why we are adding one more move. If the numOfMovesToStart of a neighbor is less than that amount, we will update numOfMovesToStart of that neighbor. Then we also want to push that neighbor into the queue so we can check that squares neighbors in the next rounds.
      if (numOfMovesToStart[currSquare] + 1 < numOfMovesToStart[neighbor]) {
        numOfMovesToStart[neighbor] = numOfMovesToStart[currSquare] + 1;
        queue.push(neighbor);
      }
    }
    // after the first iteration starting at square 1, you would have:
    // numOfMovesToStart = [Infinity, 0, 1, 1, 1, 1, 1, 1, Infinity, ..., Infinity];
    // queue = [2, 3, 4, 5, 6, 7];
    // eventually you will reach square 100, and when you do you will know the minimum number of moves to reach square 1 (same as minimum moves from square 1 to 100, because the graph is undirected and unweighted)
  }
  return numOfMovesToStart[100] < Number.MAX_SAFE_INTEGER
    ? numOfMovesToStart[100]
    : -1;
}

let exampleLadders = [
  [32, 62],
  [42, 68],
  [12, 98],
];
let exampleSnakes = [
  [95, 13],
  [97, 25],
  [93, 37],
  [79, 27],
  [75, 19],
  [49, 47],
  [67, 17],
];

console.log(quickestWayUp(exampleLadders, exampleSnakes));

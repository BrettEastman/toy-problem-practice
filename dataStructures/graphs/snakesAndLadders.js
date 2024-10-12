// solution from Discussion, that I converted from Java to JS and turned from a class into a function
function quickestWayUp(ladders, snakes) {
  // Create maps for ladders and snakes
  let laddersMap = new Map();
  let snakesMap = new Map();

  for (let ladder of ladders) {
    laddersMap.set(ladder[0], ladder[1]);
  }

  for (let snake of snakes) {
    snakesMap.set(snake[0], snake[1]);
  }

  // Build adjacency list
  const adjacencyList = Array.from({ length: 101 }, () => []);
  for (let i = 1; i <= 100; i++) {
    for (let j = 1; j <= 6; j++) {
      if (i + j <= 100) {
        let toBox = i + j;
        if (laddersMap.has(toBox)) {
          toBox = laddersMap.get(toBox);
        } else if (snakesMap.has(toBox)) {
          toBox = snakesMap.get(toBox);
        }
        adjacencyList[i].push(toBox);
      }
    }
  }
  adjacencyList[100] = [];
  console.log("adjacencyList", adjacencyList);

  // Find shortest path using BFS
  const distances = Array(101).fill(Number.MAX_SAFE_INTEGER);
  // The queue is used to keep track of the nodes that need to be processed. Initially, the queue would contain the starting node of the traversal.
  const queue = [];
  queue.push(1);
  distances[1] = 0;

  while (queue.length > 0) {
    const currNode = queue.shift();
    // The for loop iterates over all the adjacent nodes (adjNode) of the current node (currNode). The adjacency list adj is used to store the neighbors of each node in the graph.
    for (const adjNode of adjacencyList[currNode]) {
      // Within the for loop, the algorithm checks if the distance to the adjacent node (distances[adjNode]) can be minimized by going through the current node (currNode). This is done by comparing the current known distance to adjNode (distances[adjNode]) with the distance to currNode plus one (distances[currNode] + 1). If the new distance is shorter, the distance to adjNode is updated.
      if (distances[currNode] + 1 < distances[adjNode]) {
        distances[adjNode] = distances[currNode] + 1;
        // this lines up the rest of the nodes BFS style to be eventually visited, where their shortest distances from the starting node are calculated.
        queue.push(adjNode);
      }
    }
  }

  return distances[100] === Number.MAX_SAFE_INTEGER ? -1 : distances[100];
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

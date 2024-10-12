// Consider an undirected graph where each edge weighs 6 units. Each of the nodes is labeled consecutively from 1 to n.

// You will be given a number of queries. For each query, you will be given a list of edges describing an undirected graph. After you create a representation of the graph, you must determine and report the shortest distance to each of the other nodes from a given starting position using the breadth-first search algorithm (BFS). Return an array of distances from the start node in node number order. If a node is unreachable, return -1 for that node.

// Example
// The following graph is based on the listed inputs:

// All distances are from the start node 1. Outputs are calculated for distances to nodes 1 through 5: [6,6,12,-1]. Each edge is 6 units, and the unreachable node 5 has the required return distance of -1.

// Function Description

// Complete the bfs function in the editor below. If a node is unreachable, its distance is -1.

// bfs has the following parameter(s):

// int n: the number of nodes
// int m: the number of edges
// int edges[m][2]: start and end nodes for edges
// int s: the node to start traversals from

// Returns
// int[n-1]: the distances to nodes in increasing node number order, not including the start node (-1 if a node is not reachable)

// my first attempt:
function bfs1(n, m, edges, s) {
  // Write your code here
  let numOfNodes = n;

  let result = new Array(numOfNodes - 1).fill(-1);
  let nodes = {};
  for (let i = 0; i < numOfNodes; i++) {
    nodes[i + 1] = [];
  }
  for (let arr of edges) {
    nodes[arr[0]].push(arr[1]);
  }
  for (let j = s; j < numOfNodes + 1; j++) {
    let currentNodesArr = nodes[j];
    for (let edge of currentNodesArr) {
      if (result[edge - 2] === -1) {
        result[edge - 2] = 6;
      } else {
        console.log("result not -1");
        result[edge - 2] += 6;
      }
    }
  }
  return result;
}
// my second attempt (Passed all tests, but heavily influenced by the correct version below!):
function bfs2(numOfNodes, m, edges, s) {
  // Write your code here
  let result = [];
  let nodes = new Map();
  for (let i = 1; i <= numOfNodes; i++) {
    nodes.set(i, []);
  }

  let queue = [[s, 0]];
  let visited = {};
  visited[s] = 0;

  for (let arr of edges) {
    let key = arr[0];
    let value = arr[1];
    nodes.get(key).push(value);
    nodes.get(value).push(key);
  }

  while (queue.length) {
    let [i, distance] = queue.shift();
    let currNodeArr = nodes.get(i);
    for (let nodeNeighbor of currNodeArr) {
      if (visited[nodeNeighbor] === undefined) {
        visited[nodeNeighbor] = distance + 6;
        queue.push([nodeNeighbor, distance + 6]);
      }
    }
  }

  for (let j = 1; j <= numOfNodes; j++) {
    if (j === s) {
      continue;
    } else if (visited[j] === undefined) {
      result.push(-1);
    } else {
      result.push(visited[j]);
    }
  }
  return result;
}

// Correct solution on the hackerrank website discussion board
function bfs(numOfNodes, numOfEdges, edges, start) {
  let edgesMap = new Map();
  let queue = [[start, 0]];
  let visit = new Map([[start, 0]]);

  for (let i = 1; i <= numOfNodes; i++) {
    edgesMap.set(i, new Set());
  }

  edges.forEach(([n1, n2]) => {
    edgesMap.get(n1).add(n2);
    edgesMap.get(n2).add(n1);
  });

  while (queue.length) {
    let [i, distance] = queue.shift();
    edgesMap.get(i).forEach((neighbor) => {
      if (!visit.has(neighbor)) {
        visit.set(neighbor, distance + 6);
        queue.push([neighbor, distance + 6]);
      }
    });
  }

  let result = [];
  console.log("visit before for loop", visit);
  for (let i = 1; i <= numOfNodes; i++) {
    if (i == start) continue;
    result.push(visit.has(i) ? visit.get(i) : -1);
  }
  return result;
}

let n = 5;
let m = 3;
let edges = [
  [1, 2],
  [1, 3],
  [3, 4],
];
let s = 1;
console.log(bfs2(n, m, edges, s));

function dijkstrasAlgorithm(start, edges) {
  const length = edges.length;
  let minDistances = new Array(length).fill(Infinity);
  minDistances[start] = 0;

  let visited = new Set();

  // while visted size is less than length
  while (visited.size < length) {
    // create a helper function that takes in the minDistances array and visited set, to return the vertex with the current minimum distance
    // the function should return an array with the vertex and its min distance
    let arr = getVertexWithMinimumDistance(minDistances, visited);
    // create vertex var = arr[0] and currentMinDistance var = arr[1]
    let vertex = arr[0];
    let currentMinDistance = arr[1];
    // if currentMinDistance === 'inf' then break out of the loop
    if (currentMinDistance === Infinity) {
      break;
    }
    // add the vertex to the visited set
    visited.add(vertex);
    let currentEdges = edges[vertex];

    // for loop through that vertex's edges
    for (let edge of currentEdges) {
      // for each one, destination = edge[0] and distanceToDestination = edge[1]
      const destination = edge[0];
      const distanceToDestination = edge[1];
      // if destination already visited, skip with continue
      if (visited.has(destination)) {
        continue;
      }
      // create newPathDistance var = currentMinDistance + distanceToDestination
      const newPathDistance = currentMinDistance + distanceToDestination;
      // create currentDestinationDistance = minDistances[destination]
      const currentDestinationDistance = minDistances[destination];

      // if newPathDistance is less than currentDestinationDistance
      // then minDistances[destination] = newPathDistance
      if (newPathDistance < currentDestinationDistance) {
        minDistances[destination] = newPathDistance;
      }
    }
  }
  // return minDistances array, but change and "inf" to -1
  for (let j = 0; j < minDistances.length; j++) {
    if (minDistances[j] === Infinity) {
      minDistances[j] = -1;
    }
  }
  return minDistances;
}

function getVertexWithMinimumDistance(minDistArr, visitedSet) {
  // create result arr for vertex and min dist with result[0] set to null and result[1] set to Infinity
  let result = [null, Infinity];
  // iterate over the minDistArr
  for (let i = 0; i < minDistArr.length; i++) {
    // if the current index (vertex) is in visited,
    if (visitedSet.has(i)) {
      continue;
    }
    // if minDistArr[i] is less than or equal to result[1]
    if (minDistArr[i] <= result[1]) {
      result[0] = i;
      result[1] = minDistArr[i];
    }
  }
  return result;
}

let exampleStart = 0;
let exampleEdges = [
  [[1, 7]],
  [
    [2, 6],
    [3, 20],
    [4, 3],
  ],
  [[3, 14]],
  [[4, 2]],
  [],
  [],
];

console.log(dijkstrasAlgorithm(exampleStart, exampleEdges));

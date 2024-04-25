function dijkstrasAlgorithm(start, edges) {
  const length = edges.length;
  // create the initial minDistances array and fill it with Infinity
  let minDistances = new Array(length).fill(Infinity);
  // but, set the start index of minDistances to 0
  minDistances[start] = 0;

  let visited = new Set();

  while (visited.size < length) {
    // create a helper function that takes in the minDistances array and visited set, to return the vertex with the current minimum distance
    // what we want this function to return is an array with the vertex and its min distance
    let arr = getVertexWithMinimumDistance(minDistances, visited);

    // Now we deconstruct the array, assigning variables to the vertex and its min distance
    let vertex = arr[0];
    let currentMinDistance = arr[1];

    // if currentMinDistance is Infinty, then there is no path to the vertex
    if (currentMinDistance === Infinity) {
      break;
    }

    visited.add(vertex);
    // all the directed edges from the current vertex
    let currentEdges = edges[vertex];

    for (let edge of currentEdges) {
      // for each two-item array, deconstruct the array to get the destination and the distance to the destination
      const destination = edge[0];
      const distanceToDestination = edge[1];

      // if destination already visited, we don't need to visit it again
      if (visited.has(destination)) {
        continue;
      }

      const newPathDistance = currentMinDistance + distanceToDestination;
      const currentDestinationDistance = minDistances[destination];

      // if newPathDistance is less than currentDestinationDistance, update the minDistances array
      if (newPathDistance < currentDestinationDistance) {
        minDistances[destination] = newPathDistance;
      }
    }
  }
  // return minDistances array, but change any Infinity's to -1
  for (let j = 0; j < minDistances.length; j++) {
    if (minDistances[j] === Infinity) {
      minDistances[j] = -1;
    }
  }
  return minDistances;
}

function getVertexWithMinimumDistance(minDistArr, visitedSet) {
  // create initial result arr for vertex and min dist with result[0] set to null and result[1] set to Infinity
  let result = [null, Infinity];

  for (let i = 0; i < minDistArr.length; i++) {
    // Again, if already visited, we don't need to visit it again
    if (visitedSet.has(i)) {
      continue;
    }
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

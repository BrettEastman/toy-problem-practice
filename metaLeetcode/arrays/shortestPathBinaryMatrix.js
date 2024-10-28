// Leetcode: 1091. Shortest Path in Binary Matrix

// DESCRIPTION:
// Given an n x n binary matrix grid, return the length of the shortest clear path in the matrix. If there is no clear path, return -1.
// A clear path in a binary matrix is a path from the top-left cell (i.e., (0, 0)) to the bottom-right cell (i.e., (n - 1, n - 1)) such that:
// All the visited cells of the path are 0.
// All the adjacent cells of the path are 8-directionally connected (i.e., they are different and they share an edge or a corner). So, you can move diagonally, horizontally, or vertically.
// The length of a clear path is the number of visited cells of this path.

// TRICK TO SOLVE THIS PROBLEM:
// The key insight is to use Breadth-First Search (BFS) to explore all possible paths level by level, ensuring the shortest path is found if it exists. BFS is ideal for this unweighted shortest path problem because it exhaustively explores all neighboring cells at the current depth before moving further outwards. By using a queue to manage the cells to visit next and marking visited cells, BFS guarantees that the first time the goal cell is reached, that path is the shortest possible. This approach efficiently handles the 8-directional connectivity specified in the problem and avoids getting stuck in infinite loops by keeping track of visited positions.

// my solution submitted to Leetcode after studying the solution in the discussion:
/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function (grid) {
  const n = grid.length;
  // edge case: if first or last square is 1, return -1
  if (grid[0][0] === 1 || grid[n - 1][n - 1] === 1) return -1;
  // create arr of arrs of all possible directions
  let directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
    [1, 1],
    [1, -1],
    [-1, 1],
    [-1, -1],
  ];
  // create a new Set to save which places visited, with the first entry "0,0"
  let visitedPlaces = new Set();
  visitedPlaces.add("0,0");
  // create a queue with the first item being an array of [0,0,1] representing the row, column, and distance traveled
  let queue = [[0, 0, 1]];

  // while queue has length
  while (queue.length > 0) {
    // shift first item of the queue and destructure it into row, col and distance
    let [row, column, distance] = queue.shift();
    // if we are at the end, return the distance
    if (row === n - 1 && column === n - 1) return distance;

    // for loop through directions - destructure each tuple into addToRow and addToCol
    for (let [addToRow, addToCol] of directions) {
      // create neighborRow by adding row to addToRow
      let newRow = row + addToRow;
      // create neightborCol by adding col to addToCol
      let newCol = column + addToCol;

      // use if statement to check all possibilities around the original row/col to see which ones work
      if (
        newRow >= 0 &&
        newCol >= 0 &&
        newRow < n &&
        newCol < n &&
        grid[newRow][newCol] === 0 &&
        !visitedPlaces.has(`${newRow},${newCol}`)
      ) {
        visitedPlaces.add(`${newRow},${newCol}`);
        queue.push([newRow, newCol, distance + 1]);
      }
    }
  }
  return -1;
};

let grid = [
  [0, 0, 0],
  [1, 1, 0],
  [1, 1, 0],
];
console.log(shortestPathBinaryMatrix(grid)); // 4

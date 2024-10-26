// Leetcode: 1091. Shortest Path in Binary Matrix

// Given an n x n binary matrix grid, return the length of the shortest clear path in the matrix. If there is no clear path, return -1.
// A clear path in a binary matrix is a path from the top-left cell (i.e., (0, 0)) to the bottom-right cell (i.e., (n - 1, n - 1)) such that:
// All the visited cells of the path are 0.
// All the adjacent cells of the path are 8-directionally connected (i.e., they are different and they share an edge or a corner). So, you can move diagonally, horizontally, or vertically.
// The length of a clear path is the number of visited cells of this path.

/**
 * @param {number[][]} grid
 * @return {number}
 */
// var shortestPathBinaryMatrix = function (grid) {
//   const n = grid.length;
//   const directions = [
//     [0, 1], // Right
//     [1, 0], // Down
//     [0, -1], // Left
//     [-1, 0], // Up
//     [1, 1], // Down-Right
//     [1, -1], // Down-Left
//     [-1, 1], // Up-Right
//     [-1, -1], // Up-Left
//   ];

//   // Check if the starting or ending cell is blocked
//   if (grid[0][0] === 1 || grid[n - 1][n - 1] === 1) return -1;

//   const visited = new Set(["0,0"]); // Use an array in the Set constructor
//   const queue = [[0, 0, 1]]; // [row, column, distance]

//   while (queue.length > 0) {
//     const [row, col, distance] = queue.shift();

//     if (row === n - 1 && col === n - 1) return distance;

//     for (const [dx, dy] of directions) {
//       const newRow = row + dx;
//       const newCol = col + dy;

//       if (
//         newRow >= 0 &&
//         newRow < n &&
//         newCol >= 0 &&
//         newCol < n &&
//         !visited.has(`${newRow},${newCol}`) &&
//         grid[newRow][newCol] === 0
//       ) {
//         visited.add(`${newRow},${newCol}`);
//         queue.push([newRow, newCol, distance + 1]);
//       }
//     }
//   }

//   return -1; // No path found
// };

// let grid = [
//   [0, 0, 0],
//   [1, 1, 0],
//   [1, 1, 0],
// ];
// console.log(shortestPathBinaryMatrix(grid)); // 4

var shortestPathBinaryMatrix = function (grid) {
  // create n to be length
  let n = grid.length;
  // edge case: if first or last square is 1, return -1
  if (grid[0][0] === 1 || grid[n - 1][n - 1] === 1) return -1;
  // create arr of arrs of all possible directions
  const directions = [
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
  let visited = new Set(["0,0"]);
  // create a queue with the first item being an array of [0,0,1] representing the row, column, and distance traveled
  let queue = [[0, 0, 1]];

  // while queue has length
  while (queue.length) {
    // shift first item of the queue and destructure it into row, col and distance
    let [row, col, distance] = queue.shift();
    // if we are at the end, return the distance
    if (row === n - 1 && col === n - 1) {
      return distance;
    }

    // for loop through directions - destructure each tuple into addToRow and addToCol
    for (let i = 0; i < directions.length; i++) {
      let addToRow = directions[i][0];
      let addToCol = directions[i][1];
      // create neighborRow by adding row to addToRow
      let neighborRow = row + addToRow;
      // create neightborCol by adding col to addToCol
      let neighborCol = col + addToCol;

      // use if statement to check all possibilities around the original row/col to see which ones work
      if (
        grid[neighborRow][neighborCol] === 0 &&
        neighborRow >= 0 &&
        neighborCol >= 0 &&
        neighborRow < n &&
        neighborCol < n &&
        !visited.has(`${neighborRow},${neighborCol}`)
      ) {
        queue.push([neighborRow, neighborCol, distance + 1]);
        visited.add(`${neighborRow},${neighborCol}`);
      }
    }
  }

  // if you have gone through everything return -1
  return -1;
};

let grid = [
  [0, 0, 0],
  [1, 1, 0],
  [1, 1, 0],
];
console.log(shortestPathBinaryMatrix(grid)); // 4

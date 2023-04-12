// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

// my version of a solution I studied on youtube:
var numIslands = function(grid) {
  let islands = 0;
  let mRows = grid.length;
  let nColumns = grid[0].length;
  let direction = [[0, -1], [1, 0], [0, 1], [-1, 0]];

  const dfs = function(i, j) {
      grid[i][j] = 2;
      let r, c;
      for (let dir of direction) {
          r = i + dir[0];
          c = j + dir[1];
          if (r >= 0 && r < mRows && c >= 0 && c < nColumns && grid[r][c] == 1) {
              dfs(r, c);
          }
      }
      return;
  };

  for (let i = 0; i < mRows; i++) {
      for (let j = 0; j < nColumns; j++) {
          if (grid[i][j] == 1) {
              dfs(i, j);
              islands++;
          }
      }
  }
  return islands;
};

// Input: grid = [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]
// Output: 1
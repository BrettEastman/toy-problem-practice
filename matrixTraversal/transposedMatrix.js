// Transpose matrix

// You arewere given a 2-D array of integers: matrix. Write a function that returns the transpose of the matrix. The transpose of a matrix is a flipped version of the original matrix across its main diagonal, which runs from top left to bottom right. It switches the row and column indices of the original matrix. You can assume the input matrix always has at least one value; however, it’s width and height are not necessarily the same

function transposedMatrix(matrix) {
  let transposedMatrix = [];
  for (let col = 0; col < matrix[0].length; col++) {
    let newRow = [];
    for (let row = 0; row < matrix.length; row++) {
      newRow.push(matrix[row][col]);
    }
    transposedMatrix.push(newRow);
  }
  return transposedMatrix;
}

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(transposedMatrix(matrix)); // [[1, 4, 7], [2, 5, 8], [3, 6, 9]]

/*
 * Write a function that accepts a 2-dimensional array (that is, an array containing many same-length arrays),
 * and prints out every value found, but in a spiral from the upper left in to the center
 * Please write some form of specs, tests, or assertions for your code, and check as many edge cases as you can think of
 *
 * example:

    spiralTraversal([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]);

    returns [1, 2, 3, 6, 9, 8, 7, 4, 5]
 */

// Hack Reactor correct version:
var spiralTraversal = function(matrix) {
  let results = [];
  let startRowIndex = 0;
  let endRowIndex = matrix.length - 1;
  let startColIndex = 0;
  let endColIndex = matrix[0].length - 1;

  while (startRowIndex <= endRowIndex && startColIndex <= endColIndex) {
    for (let i = startColIndex; i <= endColIndex; i++) {
      results.push(matrix[startRowIndex][i]);
    }
    startRowIndex++;
    for (let j = startRowIndex; j <= endRowIndex; j++) {
      results.push(matrix[j][endColIndex]);
    }
    endColIndex--;

    if (startRowIndex <= endRowIndex) {
      for (let k = endColIndex; k >= startColIndex; k--) {
        results.push(matrix[endRowIndex][k]);
      }
      endRowIndex--;
    }

    if (startColIndex <= endColIndex) {
      for (let m = endRowIndex; m > startRowIndex; m--) {
        results.push(matrix[m][startColIndex]);
      }
      startColIndex++;
    }
  }

  return results;
}

// my solution - not fully correct
var spiralTraversal = function(matrix) {
  const result = [];
  let matrixCopy = JSON.parse(JSON.stringify(matrix));
  let index = 0;
  let current = matrixCopy[index];

  function singleArrForward(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== 'x') {
        result.push(arr[i]);
        arr[i] = 'x';
      }
    }
  }

  function arrOfArrsLast(matrix) {
    for (let j = 1 ; j < matrix.length; j++) {
      current = matrix[j];
      if (current[current.length - 1] !== 'x') {
        result.push(current[current.length - 1]);
        current[current.length - 1] = 'x';
      }
    }
  }

  function singleArrBackward(arr) {
    for (let k = arr.length - 1; k >= 0; k--) {
      if (arr[k] !== 'x') {
        result.push(arr[k]);
        arr[k] = 'x';
      }
    }
  }

  function arrOfArrsFirst(matrix) {
    for (let l = matrix.length - 2; l >= 0; l--) {
      current = matrix[l];
      if (current[0] !== 'x') {
        result.push(current[0]);
        current[0] = 'x';
      } else if (current[0] === 'x') {
        index++;
        current = matrixCopy[index];
        singleArrForward(current);
        return;
      }
    }
  }

  function spiral(arrOfArrs) {
    singleArrForward(current);
    arrOfArrsLast(arrOfArrs);
    singleArrBackward(current);
    arrOfArrsFirst(arrOfArrs);
  }

  spiral(matrixCopy);
  return result;
};

console.log(spiralTraversal([
  [1,2,3],
  [4,5,6],
  [7,8,9]
]));

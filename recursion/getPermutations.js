// Write a function that takes in an array of unique integers and returns an array of all permutations of those integeres in no particular order. If the input array is empty, the function should return an empty array.

// solution #1 - the classic solution
// Upper Bound: O(n^2*n!) | O(n*n!) space
// Roughly: O(n*n!) | O(n*n!) space

function getPermutations(array) {
  const permutations = [];
  permutationsHelper(array, [], permutations)
  return permutations;
}

function permutationsHelper(array, currentPermutation, permutations) {
  if (!array.length && currentPermutation.length) {
    permutations.push(currentPermutation);
  } else {
    for (let i = 0; i < array.length; i++) {
      let newArray = array.slice(0, i).concat(array.slice(i + 1));
      let newPermutation = currentPermutation.concat(array[i]);
      permutationsHelper(newArray, newPermutation, permutations)
    }
  }
}
// You are given an array of integers and an integer. Write a function that moves all instances of that integer in the array to the end of the array, and returns the array.

// The function should perform this in place (i.e. it should mutate the input array), and it doesn’t need to maintain the order of the other integers.

// my first solution, which is correct
function moveElementToEnd(array, toMove) {
  // for loop a reverse iteration of the array
  for (let i = array.length - 1; i >= 0; i--) {
    // if current val is equal to toMove
    if (array[i] !== toMove) {
      // for loop (regular) from j up to i
      for (let j = 0; j < i; j++) {
        // if array[j] === toMove,
        if (array[j] === toMove) {
          // swap it with array[i]
          [array[j], array[i]] = [array[i], array[j]];
          // break
          break;
        }
      }
    }
  }
  // return array
  return array;
}

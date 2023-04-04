// Write a function that takes in a "special" array and returns its product sum.
// A "special" array is a non-empty array that contains either integers or other "special" arrays. The product sum of a "special" array is the sum of its elements, where "special" arrays inside it are summed themselves and then multiplied by their level of depth.
// The depth of a "special" array is how far nested it is. For instance, the depth of [] is 1; the depth of the inner arrain [[]] is 2, etc.

// my solution was fine once I figured out its okay to add another parameter:
function productSum(array, timesAmount = 1) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      sum += productSum(array[i], timesAmount + 1);
    } else {
      sum += array[i];
    }
  }
  return sum * timesAmount;
}
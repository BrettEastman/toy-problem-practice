// Write a function that takes in an array of positive integers and returns the maximum sum of non-adjacent elements in the array.

// If the input array is empty, the function should return zero

// Explanation
// If given the array [7,10,12,7,9,14] for example, we need to create a maxSums array [7,10,19,19,28,33]. The formula for this is:
// maxSums[i] = max(maxSums[i - 1], maxSums[i-2] + array[i])

// each index of the maxSum array holds the greatest sum we can get with the items up until and including the item at that index

function maxSubsetSumNoAdjacent(array) {
  // Edge cases: if no length, return 0.
  if (!array) return 0;
  // if length 1, return that number
  if (array.length === 1) return array[0];

  // make a maxSums array that is a copy of array
  const maxSums = JSON.parse(JSON.stringify(array));
  // make the 2nd maxSums item the maximum of the first and second items
  maxSums[1] = Math.max(array[0], array[1]);

  // iterate over the array from index 2 to the end
  for (let i = 2; i < array.length; i++) {
    // maxSums[i] will be changed to the maximum of either maxSums[i - 1] or maxSums[i - 2] plus array[i] - this will give us a running count of the maximum non adjacent sum up until and including the current index
    maxSums[i] = Math.max(maxSums[i - 1], maxSums[i - 2] + array[i]);
  }

  // return the last item in the maxSums array
  return maxSums[maxSums.length - 1];
}

let arr = [7, 10, 12, 7, 9, 14];
console.log(maxSubsetSumNoAdjacent(arr));

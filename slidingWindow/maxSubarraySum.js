// It accepts an array of integers and a number called n. The function should calculat the maximum sum of n consecutive elements in the array

// in this solution, we first create the initial "window" in a short for loop, for the first n items. Then we have another for loop for the rest of the items in the array where we subtract the j - num array item and add the array[j] item. It is O(n) since we only loop through the array once in total.
function maxSubarraySum(array, num) {
  let tempSum = 0;
  let maxSum = 0;
  for (let i = 0; i < num; i++) {
    maxSum += array[i];
  }
  tempSum = maxSum;
  for (let j = num; j < array.length - 1; j++) {
    tempSum -= array[j - num];
    tempSum += array[j];
    maxSum = Math.max(tempSum, maxSum);
  }
  return maxSum;
}

console.log(maxSubarraySum([1,2,5,2,8,1,5], 2)); // 10
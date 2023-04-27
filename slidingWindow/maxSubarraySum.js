// It accepts an array of integers and a number called n. The function should calculat the maximum sum of n consecutive elements in the array

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
// It accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array

// in this solution, we first create the initial "window" in a short for loop, for the first n items. Then we have another for loop for the rest of the items in the array where we subtract the j - num array item and add the array[j] item. It is O(n) since we only loop through the array once in total.

// my version 5-1-23
function maxSubarraySum(array, n){
  if (!array || !n || n > array.length) {
      return null;
  }
  let max = 0;
  for (let i = 0; i < n; i++) {
      max += array[i];
  }
  let tempMax = max;

  for (let j = n; j < array.length; j++) {
      tempMax += array[j];
      tempMax -= array[j - n];
      if (tempMax > max) {
          max = tempMax;
      }
  }
  return max;
}

// Julie's version:
function maxSubarraySum(nums, k){
  if (nums.length < k) return null;
  let maxSum = 0;
  for (let i = 0; i < k; i++) {
    maxSum += nums[i];
  }
  let currSum = maxSum;
  for (let i = k; i < nums.length; i++) {
    currSum += (nums[i] - nums[i - k]);
    maxSum = Math.max(currSum, maxSum);

  }
  return maxSum;
}

// version from Colt Steele
function maxSubarraySum(arr, num){
  if (arr.length < num) return null;

  let total = 0;
  for (let i=0; i<num; i++){
     total += arr[i];
  }
  let currentTotal = total;
  for (let i = num; i < arr.length; i++) {
     currentTotal += arr[i] - arr[i-num];
     total = Math.max(total, currentTotal);
  }
  return total;
}

// other online version?
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
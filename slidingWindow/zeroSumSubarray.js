// Algoexpert
// You were given a list of integers nums. Write a function that returns a Boolean representing whether there exists a zero sum subarray of nums.

// Zero sum subarray is any subarray where all of the values add up to zero. A sub array is any contiguous section of the array. For the purposes of this problem, a subarray can be as small as one element, and as long as the original array.

// their solution(more efficient - O(n) time and O(n) space):
function zeroSumSubarray(nums) {
  // if we see two versions of the same sum, we know those would cancel each other out and we would have zero, so we create a Set to keep track of all the previous sums
  const sums = new Set([0]);
  let currentSum = 0;
  for (const num of nums) {
    currentSum += num;
    if (sums.has(currentSum)) return true;
    sums.add(currentSum);
  }
  return false;
}

// my solution which is correct(less efficient)
function zeroSumSubarray(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      return true;
    }
    for (let j = i; j < nums.length; j++) {
      let current = nums.slice(i, j + 1);
      let tempSum = current.reduce((acc, current) => acc + current, 0);
      if (tempSum === 0) {
        return true;
      }
    }
  }
  return false;
}
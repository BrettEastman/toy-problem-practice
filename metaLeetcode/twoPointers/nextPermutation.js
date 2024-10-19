// Leetcode: 31. Next Permutation
// Description: Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers. If such an arrangement is not possible, it must rearrange it as the lowest possible order (i.e., sorted in ascending order). The replacement must be in place and use only constant extra memory.

// A permutation of an array of integers is an arrangement of its members into a sequence or linear order.

// For example, for arr = [1,2,3], the following are all the permutations of arr: [1,2,3], [1,3,2], [2, 1, 3], [2, 3, 1], [3,1,2], [3,2,1].
// The next permutation of an array of integers is the next lexicographically greater permutation of its integer. More formally, if all the permutations of the array are sorted in one container according to their lexicographical order, then the next permutation of that array is the permutation that follows it in the sorted container. If such arrangement is not possible, the array must be rearranged as the lowest possible order (i.e., sorted in ascending order).

// For example, the next permutation of arr = [1,2,3] is [1,3,2].
// Similarly, the next permutation of arr = [2,3,1] is [3,1,2].
// While the next permutation of arr = [3,2,1] is [1,2,3] because [3,2,1] does not have a lexicographical larger rearrangement.
// Given an array of integers nums, find the next permutation of nums.

// The replacement must be in place and use only constant extra memory.

// My first pseudo code:
// find the first number that is less than the number to its right
// the trick to finding the next permutation is to find the last portion of the array that is in descending order, because that means that the next permutation will start with the next number that is greater than the number to the left of the subset.
// we start at the second to last number, because there is no number to the right of the last number and a single number does not qualify as being in descending order.
// Once we know where the descending order subset starts, we need to iterate through that subset in reverse order to find the next number that is greater than the number immediately to the left of the subset.
// Once we find that number, we swap it with the number to the left of the subset.
// Then we reverse the subset to put it in ascending order and we have found the next permutation!

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  // find the last portion of the array that is in descending order
  // create i as the second to last index of the array
  let i = nums.length - 2;
  // while i is greater than or equal to zero and the num at i is greater than or equal to the num at i + 1
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    // decrement i
    // this will lead us to the index of the num immediately to the left of the last portion of the array
    i--;
  }

  // i could be -1 so we need to account for that possibility
  if (i >= 0) {
    // find the first num in the last portion that is greater than or equal to the num at i.
    let j = nums.length - 1;
    // while j >= zero and num at j is less than or equal to num at i
    while (j >= 0 && nums[j] <= nums[i]) {
      // decrement j
      // this will lead us to the num that will replace the num at i
      j--;
    }

    // take that num at j and swap it with the num immediately to the left of the subset
    [nums[j], nums[i]] = [nums[i], nums[j]];
  }

  // then take that array subset and reverse the order
  let left = i + 1;
  let right = nums.length - 1;
  while (left < right) {
    [nums[left], nums[right]] = [nums[right], nums[left]];
    left++;
    right--;
  }
  // then that is the solution, so return that array
  return nums;
};

// Leetcode: 88. Merge Sorted Array
// Description: You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively. Merge nums1 and nums2 into a single array sorted in non-decreasing order. The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

// Example 1:
// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

// Best solution based on my 2nd attempt, but then with the help of Phind.com:
var merge = function (nums1, m, nums2, n) {
  if (n === 0) return nums1;

  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;

  while (j >= 0) {
    if (i >= 0 && nums1[i] > nums2[j]) {
      In the expression nums1[k--] = nums1[i--], the decrement operator (--) is applied twice:

First, it decrements the values of k and i.
Then, it assigns the new values of k and i to nums1[k] and nums1[i], respectively.
      // let temp = nums1[i];
      // nums1[k] = temp;
      // k--;
      // i--;
      nums1[k--] = nums1[i--];
    } else {
      nums1[k--] = nums2[j--];
    }
  }

  return nums1;
};

// my first attempt, which passed 25/59 test cases
var merge = function (nums1, m, nums2, n) {
  if (n === 0) return nums1;
  let length = m + n;
  let i = 0;
  let j = 0;
  let nums1Only = nums1.slice(0, m);

  for (let k = 0; k < length; k++) {
    if (nums1Only[i] < nums2[j]) {
      nums1[k] = nums1Only[i];
      i++;
    } else {
      nums1[k] = nums2[j];
      j++;
    }
  }

  return nums1;
};

let nums1 = [1, 2, 3, 0, 0, 0];
let m = 3;
let nums2 = [2, 5, 6];
let n = 3;

console.log(merge(nums1, m, nums2, n)); // [1,2,2,3,5,6]

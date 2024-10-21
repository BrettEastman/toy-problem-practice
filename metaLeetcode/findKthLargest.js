// Leetcode: 215. Kth Largest Element in an Array
// URL: https://leetcode.com/problems/kth-largest-element-in-an-array/
// Time: O(n) average case, O(n^2) worst case
// Space: O(1)

// Given an integer array nums and an integer k, return the kth largest element in the array.
// Note that it is the kth largest element in the sorted order, not the kth distinct element.
// Can you solve it without sorting?

// Explanation:
// The algorithm efficiently finds the kth largest number by dividing the list into smaller parts and focusing only on the part that contains the kth largest number. This way, it avoids sorting the entire list, making it faster on average.

// CAVEAT!!!
// Leetcode will not allow quickSelect to be used to solve this problem. It will only accept a solution that uses a min heap. So, the solution below will not work on Leetcode. However, it is a good solution to know and understand.

var findKthLargest = function (nums, k) {
  const kthIndex = nums.length - k;

  /// This function works by repeatedly dividing the list into smaller parts and focusing only on the part that contains the kth largest number.
  function quickSelect(leftIndex, rightIndex) {
    // If the pivot index is the same as the position we calculated earlier, then we have found the correct index and nums[left] is the correct answer
    if (leftIndex === rightIndex) return nums[leftIndex];

    // get the pivot index, while at the same time partitioning and slightly sorting the nums arr with partitionAndGetPivotIndex. Use the same leftIndex and rightIndex args.
    const pivotIndex = partitionAndGetPivotIndex(leftIndex, rightIndex);

    // If the pivot index is the same as the position we calculated earlier, we have found the kth largest number.
    if (pivotIndex === kthIndex) {
      return nums[pivotIndex];
      // If the pivot index is greater than the position, we search the left part of the list.
    } else if (pivotIndex > kthIndex) {
      return quickSelect(leftIndex, pivotIndex - 1);
      // If the pivot index is less than the position, we search the right part of the list.
    } else {
      return quickSelect(pivotIndex + 1, rightIndex);
    }
  }

  // create partitionAndGetPivotIndex function with leftIndex and rightIndex args
  // This function helps us divide the list into two parts: numbers smaller than a chosen "pivot" number and numbers larger than the pivot. The pivot is usually the last number in the current part of the list. It rearranges the numbers and returns the index of the pivot after rearrangement. This index helps us decide which part of the list to focus on next.
  function partitionAndGetPivotIndex(leftIndex, rightIndex) {
    // start by creating pivot var set to nums[rightIndex]
    const pivotNum = nums[rightIndex];
    let i = leftIndex;

    // for loop where we let j also equal leftIndex and go up to and including rightIndex
    for (let j = leftIndex; j <= rightIndex; j++) {
      // here we're saying that, if the current num is greater than the pivot, we will skip it and leave it at the top. Right now we are mainly looking for nums that are less than the pivot, so then we can swap them with another num, thus pushing the smaller nums toward the bottom. In the end, we will swap out the pivot with the first num that is in the larger half.
      if (nums[j] < pivotNum) {
        // we can swap the current num with num at i (note they might be the same and no swap occurs)
        [nums[j], nums[i]] = [nums[i], nums[j]];
        // then increment i. i needs to move along and find other smaller nums for the bottom half
        i++;
      }
    }
    // after the for loop, swap the num at i with the num at rightIndex (i.e. the pivot)
    [nums[i], nums[rightIndex]] = [nums[rightIndex], nums[i]];
    return i;
  }

  // call quickSelect function
  return quickSelect(0, nums.length - 1);
};

// Example usage
const nums = [3, 2, 1, 5, 6, 4];
const nums2 = [3, 8, 9, 4, 5, 6, 1, 2];
const k = 2;
console.log(findKthLargest(nums2, k));

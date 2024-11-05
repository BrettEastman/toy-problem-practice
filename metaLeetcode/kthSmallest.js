// Leetcode: 378. Kth Smallest Element in a Sorted Matrix
// URL: https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/
// Medium
// Given an n x n matrix where each of the rows and columns is sorted in ascending order, return the kth smallest element in the matrix.
// Note that it is the kth smallest element in the sorted order, not the kth distinct element.

// You must find a solution with a memory complexity better than O(n2).

// Example 1:
// Input: matrix = [[1,5,9],[10,11,13],[12,13,15]], k = 8
// Output: 13
// Explanation: The elements in the matrix are [1,5,9,10,11,12,13,13,15], and the 8th smallest number is 13

// Example 2:
// Input: matrix = [[-5]], k = 1
// Output: -5

/**
 * Finds the kth smallest element in a sorted matrix using Binary Search.
 *
 * @param {number[][]} matrix - A 2D array where each row and column is sorted in ascending order.
 * @param {number} k - The position of the smallest element to find.
 * @return {number} - The kth smallest element in the matrix.
 */
var kthSmallest = function (matrix, k) {
  const n = matrix.length;

  // Initialize the search range with the smallest and largest elements in the matrix.
  let left = matrix[0][0];
  let right = matrix[n - 1][n - 1];

  /**
   * Binary Search Loop:
   * Continuously narrow down the search range until left == right,
   * which will be the kth smallest element.
   */
  while (left < right) {
    // Find the middle value of the current range.
    let mid = Math.floor((left + right) / 2);
    let count = 0; // Counts the number of elements <= mid.
    let j = n - 1; // Pointer for the current row, starting from the end.

    /**
     * Count Elements <= Mid:
     * For each row, move the pointer 'j' leftwards until matrix[i][j] <= mid.
     * The number of valid elements in the row is then (j + 1).
     * This works efficiently because each row is sorted.
     */
    for (let i = 0; i < n; i++) {
      while (j >= 0 && matrix[i][j] > mid) {
        j--; // Move left if the current element is greater than mid.
      }
      count += j + 1; // Add the number of elements <= mid in this row.
    }

    /**
     * Adjust the Search Range:
     * - If the count of elements less than k,
     *   then the kth smallest element must be greater than mid.
     *   Move the left boundary to mid + 1.
     * - Otherwise, the kth smallest element is <= mid.
     *   Move the right boundary to mid.
     */
    if (count < k) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  /**
   * When the loop ends, left == right,
   * which is the smallest value such that there are at least k elements <= left.
   */
  return left;
};

let exampleMatrix = [
  [1, 5, 9],
  [10, 11, 13],
  [12, 13, 15],
];
let exampleK = 8;
console.log(kthSmallest(exampleMatrix, exampleK)); // Output: 13

// ### **Explanation of the Trick: Binary Search on Value Range**
//
// Instead of iterating through the matrix or using a heap, we perform a binary search
// on the range of possible values (from the smallest to the largest element in the matrix).
//
// **Why This Works:**
// - The matrix is sorted both row-wise and column-wise, which allows us to efficiently
//   count the number of elements less than or equal to a chosen middle value.
// - By comparing this count with k, we can adjust our search range accordingly.
//
// **Step-by-Step Reasoning:**
// 1. **Initialize Search Range:**
//    - `left` is set to the smallest element in the matrix.
//    - `right` is set to the largest element in the matrix.
//
// 2. **Binary Search Loop:**
//    - Calculate `mid` as the average of `left` and `right`.
//    - Count how many elements in the matrix are less than or equal to `mid`.
//      - Start from the top-right corner of the matrix.
//      - For each row, move leftwards until you find an element <= mid.
//      - The number of valid elements in that row is then `j + 1`.
//    - If the count is less than k, move the `left` boundary up.
//    - Otherwise, move the `right` boundary down.
//
// 3. **Termination:**
//    - The loop continues until `left` meets `right`.
//    - At this point, `left` (or `right`) is the kth smallest element.
//
// **Advantages of This Approach:**
// - **Time Efficiency:** O(n * log(max - min)), where n is the dimension of the matrix.
//   - The binary search runs in log(max - min) iterations.
//   - Counting the elements <= mid takes O(n) time per iteration.
// - **Space Efficiency:** O(1), since no additional space proportional to the input size is used.

// my version of the above code
/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {
  // var for matrix length - n
  const n = matrix.length;
  // initialize the search range with the smallest and largest elements in the matrix - left and right
  let left = matrix[0][0];
  let right = matrix[n - 1][n - 1];

  // Binary search loop
  // Continuously narrow down the search range until left === right, which will be the kth smallest
  while (left < right) {
    // always start with the midValue
    let midValue = Math.floor((left + right) / 2);
    // initialize a counter to count the number of elements that are less than or equal to mid
    let counter = 0;
    // initialize pointer for current row, which will start at the end of the row and move backwards
    let j = n - 1;

    // for loop through the array of arrays
    for (let i = 0; i < n; i++) {
      // what we are doing here is finding out many items are less than mid
      // so we start with j being the length of the row - 1 (i.e. the end of the row) because we are assuming all items are greater than mid
      // if it is greater than mid, we decrement j, so one less j we will add to counter for that row
      while (j >= 0 && matrix[i][j] > midValue) {
        j--;
      }
      // after the while loop is done, we can increment the counter by j + 1 (because it goes one past and needs correction)
      counter += j + 1;
      // then same thing with each other row in the for loop
    }

    // at this point, we have a count and we compare it to k. The purpose is to adjust our search range while also looking for the kth item
    // if the count is less than k, then the kth smallest element must be greater than mid. Move the left boundary to mid + 1.
    // otherwise the kth smallest is less than equal to mid, so move right boundary to mid
    if (counter < k) {
      left = midValue + 1;
    } else {
      right = midValue;
    }
  }

  // when the loop ends, left === right, which is the smallest value such that there are at least k elements left
  return left;
};

// Leetcode: 339. Nested List Weight Sum
// URL: https://leetcode.com/problems/nested-list-weight-sum/
// Difficulty: Easy

// You are given a nested list of integers nestedList. Each element is either an integer or a list whose elements may also be integers or other lists.
// The depth of an integer is the number of lists that it is inside of. For example, the nested list [1,[2,2],[[3],2],1] has each integer's value set to its depth.
// Return the sum of each integer in nestedList multiplied by its depth.

/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a single integer equal to value.
 *     @return {void}
 *     this.setInteger = function(value) {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
 *     @return {void}
 *     this.add = function(elem) {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @param {NestedInteger[]} nestedList
 * @return {number}
 */
// Solution in the Leetcode discussion. I did not write this solution, but wrote one similar using Array.isArray(), but I wouldn't have gotten this one because I didn't understand the jsDoc syntax for the creating a NestedInteger class. So, I didn't realize that getInteger, isInteger and getList were methods of the NestedInteger class.
var depthSum = function (nestedList) {
  function getSum(arr, depth) {
    let currentSum = 0;
    for (let i = 0; i < arr.length; i++) {
      let item = arr[i];
      if (item.isInteger()) {
        currentSum = currentSum + item.getInteger() * depth;
      } else {
        currentSum += getSum(item.getList(), depth + 1);
      }
    }
    return currentSum;
  }
  return getSum(nestedList, 1);
};

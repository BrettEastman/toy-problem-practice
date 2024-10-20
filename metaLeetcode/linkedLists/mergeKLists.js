// Leetcode: 23. Merge k Sorted Lists
// URL: https://leetcode.com/problems/merge-k-sorted-lists/
// Difficulty: Hard

// You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.
// Merge all the linked-lists into one sorted linked-list and return it.

// Example 1:
// Input: lists = [[1,4,5],[1,3,4],[2,6]]
// Output: [1,1,2,3,4,4,5,6]
// Explanation: The linked-lists are:
// [
//   1->4->5,
//   1->3->4,
//   2->6
// ]
// merging them into one sorted list:
// 1->1->2->3->4->4->5->6

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// first discussion solution that looked interesting:
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

// Optional in this case - Leetcode will provide the ListNode class
class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// my solution based on one in discussion:
// It's actually really straightforward - I just need to convert the linked lists to a single array of its values, sort the array, and then convert the array back to a linked list.
var mergeKLists = function (lists) {
  let nums = [];
  // iterate first through the list of linked lists:
  for (let i = 0; i < lists.length; i++) {
    let current = lists[i];
    // then iterate through each linked list and push its values to the nums array:
    while (current !== null) {
      nums.push(current.val);
      current = current.next;
    }
  }
  nums.sort((a, b) => a - b);
  return arrToLinkedList(nums);
};

function arrToLinkedList(arr) {
  if (!arr.length) return null;

  let head = new ListNode(arr[0]);
  let currentNode = head;

  for (let j = 1; j < arr.length; j++) {
    currentNode.next = new ListNode(arr[j]);
    currentNode = currentNode.next;
  }
  return head;
}

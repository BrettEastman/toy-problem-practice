// Leetcode 21. Merge Two Sorted Lists
// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.
// Return the head of the merged linked list.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  if (list1 === null) return list2;
  if (list2 === null) return list1;

  // we need dummy to stay the same, while result becomes the redefined at each while loop, allowing result to be the variable that traverses and builds the list. It will always be attached to dummy.next. In brief, dummy stays the same, while result is continuously changing.
  let dummy = new ListNode();
  let result = dummy;

  let current1 = list1;
  let current2 = list2;

  while (current1 !== null && current2 !== null) {
    if (current1.val < current2.val) {
      result.next = current1;
      current1 = current1.next;
    } else {
      result.next = current2;
      current2 = current2.next;
    }
    result = result.next;
  }

  if (current2 !== null) {
    result.next = current2;
  } else if (current1 !== null) {
    result.next = current1;
  }
  return dummy.next;
};

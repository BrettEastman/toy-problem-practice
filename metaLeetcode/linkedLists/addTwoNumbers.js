// Leetcode: 2. Add Two Numbers
// URL: https://leetcode.com/problems/add-two-numbers/
// Difficulty: Medium

// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example 1:
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

// Example 2:
// Input: l1 = [0], l2 = [0]
// Output: [0]

// Example 3:
// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]

// EXPLANATION:
// - We can add two numbers (using grade-school long-hand addition starting with the first digit in each number and carrying over if double-digit number) by iterating through both linked lists simultaneously. Since the digits are stored in reverse order, we can start from the head of each list and add the corresponding digits along with the carry. If the sum is greater than or equal to 10, we need to carry over the remainder to the next node. We continue this process until we reach the end of both lists.
// - We keep track of the carry and the sum of the current digits.
// - We create a new linked list (dummyHead) to store the result.
// - We return the final answer, which is dummyHead.next.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  // The purpose of the dummyHead is to simplify the code by creating a placeholder for the new list. In the end, we just return the next node after the dummy head.
  const dummyHead = new ListNode(0);
  let p = l1;
  let q = l2;
  let current = dummyHead;
  let carry = 0;

  // Traverse the linked lists until we reach the end of both lists
  while (p !== null || q !== null) {
    // If one list is longer than the other, set the value to 0
    const x = p !== null ? p.val : 0;
    const y = q !== null ? q.val : 0;

    // Calculate the sum of the two digits and the carry
    const sum = x + y + carry;
    carry = Math.floor(sum / 10);

    // Create a new node with the digit value
    current.next = new ListNode(sum % 10);
    current = current.next;

    // Move to the next node in each list
    if (p !== null) p = p.next;
    if (q !== null) q = q.next;
  }

  // If there is a carry left over, create a new node with the carry value
  if (carry > 0) {
    current.next = new ListNode(carry);
  }

  // Return the next node after the dummy head
  return dummyHead.next;
};

// My version based on the above, mixed with other versions:
var addTwoNumbers = function (l1, l2) {
  if (!l1 && !l2) return null;
  if (l1 && !l2) {
    return l1;
  }
  if (l2 && !l1) {
    return l2;
  }

  // initialize variables for the dummyHead and the carry value
  let dummyHead = new ListNode(0);
  let carry = 0;
  let current = dummyHead;

  // keep the while loop going to end of both linked lists (one number might be more digits than the other)
  while (l1 || l2) {
    let sum = carry;

    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }
    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }

    // If current is still the dummyHead, this will be the first digit of the reverse number - it will be either a number under 10 or whatever the remainder is
    current.next = new ListNode(sum % 10);
    current = current.next;

    // if it is a number over 10, then we want to carry that over to the next number.
    carry = Math.floor(sum / 10);
  }

  if (carry > 0) {
    current.next = new ListNode(carry);
  }
  return dummyHead.next;
};

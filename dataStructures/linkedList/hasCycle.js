// Definition for singly-linked list.
function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */

// The provided JavaScript function hasCycle is designed to detect if a linked list contains a cycle. It implements the well-known "Floyd's Tortoise and Hare" algorithm, also known as the "slow and fast pointer" technique. This elegant approach uses two pointers moving at different speeds to determine whether the linked list loops back on itself at any point.

// The function begins by initializing two pointers, slow and fast, both starting at the head of the linked list. The central idea is that the slow pointer moves one step at a time, while the fast pointer moves two steps at a time.

// The algorithm utilizes a while loop that continues as long as the fast pointer exists and has a next node (fast && fast.next). This condition ensures that we don't try to access properties of null nodes. Within each iteration, the slow pointer moves one step forward (slow = slow.next), and the fast pointer moves two steps forward (fast = fast.next.next).

// The key insight of the algorithm lies in the comparison if (slow === fast) return true;. If the linked list contains a cycle, the fast pointer, moving twice as fast as the slow pointer, will eventually catch up to it. This is similar to a scenario where two runners are on a circular track – if one runner is faster than the other, they will eventually meet again. When this happens, the function returns true, confirming the presence of a cycle.

// If the loop terminates without the pointers meeting, it means the fast pointer has reached the end of the linked list (fast === null or fast.next === null), which is only possible if the linked list does not contain a cycle. In this case, the function returns false.

// correct solution - it's a 2-pointer concept with the tortoise and hare idea - one moves slow, the other one moves faster.
var hasCycle = function (head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) return true;
  }

  return false;
};

// LeetCode 143. Reorder List
// You are given the head of a singly linked-list. The list can be represented as:

// L0 → L1 → … → Ln - 1 → Ln
// Reorder the list to be on the following form:

// L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
// You may not modify the values in the list's nodes. Only nodes themselves may be changed.

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// o(n) time o(1) -space - an official solution on LeetCode
var reorderList = function (head) {
  if (!head || !head.next) return;

  // Find the middle of the linked list:
  // The code uses the classic "tortoise and hare" (slow and fast pointer) approach to find the middle of the list. The fast pointer moves twice as quickly as the slow pointer, so when the fast pointer reaches the end, the slow pointer will be at the middle.
  // The goal is to split the list into two roughly equal parts:
  // First half: from head to slow (inclusive)
  // Second half: from slow.next to the end
  let slow = head;
  let fast = head;
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // Reverse the second half of the linked list:
  // After finding the middle with slow, the second half of the list is reversed in-place using an iterative approach. The prev variable ends up pointing to the new head of the reversed second half.
  // Standard iterative linked list reversal algorithm:
  let prev = null; // Will eventually point to the new head of the reversed list (initially null since the last node will point to null)
  let curr = slow.next; // Start with the first node of the second half (right after the middle)

  while (curr) {
    // Continue until we reach the end of the list (curr becomes null)
    let nextNode = curr.next; // Store the next node before we change curr's next pointer
    curr.next = prev; // Reverse the pointer of current node to point to the previous node
    prev = curr; // Move prev forward to current node for the next iteration
    curr = nextNode; // Move curr forward to the next node we stored earlier
  }
  slow.next = null; // Break the link between first and second half by setting middle node's next to null. Slow.next is the end of the first half.

  // Merge the two halves
  let p1 = head; // p1 points to the current node in the first half (starts at the original head)
  let p2 = prev; // p2 points to the current node in the second half (prev now holds the new head of the reversed second half)
  while (p1 && p2) {
    // Continue as long as we have nodes in both halves
    let nextP1 = p1.next; // Save the next node in the first half before changing any pointers
    let nextP2 = p2.next; // Save the next node in the second half before changing any pointers

    p1.next = p2; // Connect current first-half node to current second-half node, 1->4
    p2.next = nextP1; // Connect current second-half node to next first-half node, 4->2

    p1 = nextP1; // Advance p1 to the next node in the first half, 2
    p2 = nextP2; // Advance p2 to the next node in the second half, 3
  }
};

// my version based on the above
var reorderList = function (head) {
  // find the middle node using the tortoise vs. hare algorithm
  let slow = head;
  let fast = head;
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // reverse the 2nd half of the linked list, starting from the node after the middle, going to the end
  let head2 = null;
  let curr = slow.next;
  while (curr) {
    let tempNext = curr.next;
    curr.next = head2;
    head2 = curr;
    curr = tempNext;
  }

  // break the link between the first and second halves
  slow.next = null;

  // create two pointers to traverse their respective halves
  let pointer1 = head;
  let pointer2 = head2;

  // while pointers 1 and 2 are not null
  while (pointer1 && pointer2) {
    // create temporary vars for the .next of each pointer
    let pointer1Next = pointer1.next;
    let pointer2Next = pointer2.next;

    // connect pointer1 head.next to pointer2 head
    pointer1.next = pointer2;
    // connect pointer2.next to pointer1Next
    pointer2.next = pointer1Next;

    pointer1 = pointer1Next;
    pointer2 = pointer2Next;
  }
};

// ----------------------------------------------------
// Helper function to build a linked list from an array
function arrayToList(arr) {
  if (arr.length === 0) return null;

  const head = new ListNode(arr[0]);
  let current = head;

  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }

  return head;
}

// Helper function to convert linked list to array for display
function listToArray(head) {
  const result = [];
  let current = head;

  while (current) {
    result.push(current.val);
    current = current.next;
  }

  return result;
}
// ----------------------------------------------------

let example = [1, 2, 3, 4, 5];
let head = arrayToList(example);
reorderList(head);
console.log(listToArray(head)); // [1, 5, 2, 4, 3]

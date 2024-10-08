// Definition for singly-linked list.
function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */

// my first attempt, which got 24/29 tests right
var hasCycle = function (head) {
  let currNode = head;
  let visited = [];

  while (currNode !== null) {
    let currVal = currNode.val;
    if (visited.includes(currVal)) {
      return true;
    }
    visited.push(currVal);
    currNode = currNode.next;
  }
  return false;
};

// my second attempt
let currNode = head;
let visited = [];
let currVal = currNode.val;

while (currNode !== null) {
  if (visited.includes(currVal)) {
    return true;
  }
  visited.push(currVal);
  currNode = currNode.next;
  currNode.val !== null ? (currVal = currNode.val) : (currVal = currVal);
}

if (visited.includes(currVal)) {
  return true;
}
return false;

// correct solution - it's a 2-pointer concept with the tortoise and hare idea - one moves slow, the other one moves faster. I don't really understand how that compares every item with every other one, seems like a lot of item pairs would be skipped, so I will have to research it.
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

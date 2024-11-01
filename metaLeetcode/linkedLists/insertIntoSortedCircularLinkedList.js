// Leetcode: 708. Insert into a Sorted Circular Linked List
// URL: https://leetcode.com/problems/insert-into-a-sorted-circular-linked-list/
// Difficulty: Medium
//
// Given a Circular Linked List node, which is sorted in non-descending order, write a function to insert a value insertVal into the list such that it remains a sorted circular list. The given node can be a reference to any single node in the list and may not necessarily be the smallest value in the circular list.

// If there are multiple suitable places for insertion, you may choose any place to insert the new value. After the insertion, the circular list should remain sorted.

// If the list is empty (i.e., the given node is null), you should create a new single circular list and return the reference to that single node. Otherwise, you should return the originally given node.

// Example 1:
// Input: head = [3,4,1], insertVal = 2
// Output: [3,4,1,2]
// Explanation: In the figure above, there is a sorted circular list of three elements. You are given a reference to the node with value 3, and we need to insert 2 into the list. The new node should be inserted between node 1 and node 3. After the insertion, the list should look like this, and we should still return node 3.

// The algorithm traverses the list only once, making it efficient with a time complexity of O(n), where n is the number of nodes in the list.

/**
 * // Definition for a _Node.
 * function _Node(val, next) {
 *     this.val = val;
 *     this.next = next;
 * };
 */

/**
 * Inserts a value into a sorted circular linked list.
 *
 * @param {Node} head - The head of the circular linked list.
 * @param {number} insertVal - The value to be inserted.
 * @return {Node} - The head of the updated circular linked list.
 */
var insert = function (head, insertVal) {
  // If the list is empty, create a new node pointing to itself and return it
  if (!head) {
    const newNode = new _Node(insertVal);
    newNode.next = newNode;
    return newNode;
  }

  let prev = head;
  let curr = head.next;
  let toInsert = false;

  // Traverse the list using a while loop. This will loop through the list until we get back to the head
  while (curr !== head) {
    if (prev.val <= insertVal && insertVal <= curr.val) {
      // Case 1: insertVal fits between prev and curr
      toInsert = true;
    } else if (prev.val > curr.val) {
      // Case 2: prev is the tail and curr is the head (rotation point). Correctly identifies the point where the list wraps around from the highest to the lowest value, allowing insertion of new maximum or minimum values.
      if (prev.val <= insertVal || insertVal <= curr.val) {
        // insertVal is either the new maximum or minimum
        toInsert = true;
      }
    }

    if (toInsert) {
      // Insert the new node between prev and curr
      prev.next = new _Node(insertVal, curr);
      return head;
    }

    // Move to the next pair of nodes
    prev = curr;
    curr = curr.next;
  }

  // Case 3: All nodes have the same value or appropriate position was not found. If all nodes have the same value, the insertion can occur at any position without violating the sorted order.
  // Insert the new node after prev (which is tail)
  prev.next = new _Node(insertVal, curr);
  return head;
};

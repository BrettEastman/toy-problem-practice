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

  // Because of Reference vs. Value in Javascript, both variables dummy and result start out pointing to the exact same object in memory. This is why we can modify result and it will modify what dummy is pointing to as well. We modify result with each iteration to build out the new linked list. In the end, we can just return dummy.next to return the actual list, while also avoiding the 0th index edge cases.
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

  // If there is anything else left at the end of either list, tack it on to the result
  if (current2 !== null) {
    result.next = current2;
  } else if (current1 !== null) {
    result.next = current1;
  }
  return dummy.next;
};

// Here is an example of what dummy might look like in the end:
// dummy = {
//   val: 0,
//   next: {
//     val: 1,
//     next: {
//       val: 2,
//       next: {
//         val: 3,
//         next: {
//           val: 4,
//           next: {
//             val: 5,
//             next: {
//               val: 6,
//               next: null
//             }
//           }
//         }
//       }
//     }
//   }
// };

// Key Insight: dummy Never Changes What It Points To

// The critical part is:
// - dummy always points to the original dummy node
// - result changes what it points to with each iteration
// - Since dummy.next was set (via result.next) before moving result, dummy.next points to the first real node in our merged list

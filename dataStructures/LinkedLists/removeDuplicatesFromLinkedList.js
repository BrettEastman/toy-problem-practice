// You’re given the head of a Singly Link List whose nodes are in sorted order with respect to their values. Write a function that returns a modified version of the Linked List that doesn’t contain any nodes with duplicate values. The Linked List should be modified in place (i.e., you should’t create a brand new list), and the modified Linked List should still have its nodes sorted with respect to their values.
// Each LinkedList node has an integer value as well as a next node pointing to the next  node in the list or to None/null if it’s the tail of the list.

// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeDuplicatesFromLinkedList(linkedList) {
  let currentNode = linkedList;
  // don't do while (currentNode.next !== null) because you'll miss the last node if it is none instead of null
  while (currentNode.next) {
    if (currentNode.next.value === currentNode.value) {
      currentNode.next = currentNode.next.next;
    } else {
      currentNode = currentNode.next;
    }
  }
  // don't forget to return the linkedList!
  return linkedList;
}

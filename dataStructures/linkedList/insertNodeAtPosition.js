class SinglyLinkedListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function insertNodeAtPosition(llist, data, position) {
  if (llist === null) {
    const newNode = new SinglyLinkedListNode(data);
    return newNode;
  }

  if (position === 0) {
    const newNode = new SinglyLinkedListNode(data);
    newNode.next = llist;
    return newNode;
  }

  // Traverse the linked list to find the insertion position
  let prevNode = llist;
  let currNode = llist.next;
  let count = 0;
  while (currNode !== null && count < position - 1) {
    prevNode = currNode;
    currNode = currNode.next;
    count++;
  }

  // Handle invalid position (beyond list length)
  if (count < position - 1) {
    throw new Error(
      "Invalid position: Cannot insert beyond the end of the list"
    );
  }

  const newNode = new SinglyLinkedListNode(data);

  newNode.next = currNode;
  prevNode.next = newNode;

  return llist;
}

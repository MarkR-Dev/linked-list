import Node from "./node.mjs";

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  // Point head to new node if the list is empty or loop until the tail and append
  append(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }
    this.length++;
  }

  // Assign the new node's next pointer to the current head and point the head at the new node
  prepend(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  // Returns the current length of the list, decided to increment an object instance property over traversing the list and counting
  size() {
    return this.length;
  }

  log() {
    console.log("List:", this.head);
    console.log("Size:", this.size());
  }
}

export default LinkedList;

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

  // Returns the current length of the list, decided to increment an object instance property over traversing the list and counting repeatedly
  size() {
    return this.length;
  }

  getHead() {
    return this.head;
  }

  getTail() {
    if (this.head === null) {
      return null;
    }

    let currentNode = this.head;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  at(targetIndex) {
    // Check to see if the list is empty and if the targeted index is below/above the bounds of the list.
    // List index begins at 0, and an empty list has a 0 length property so we minus 1 to account for that.
    if (targetIndex < 0 || targetIndex > this.length - 1) {
      return null;
    }
    let currentIndex = 0;
    let currentNode = this.head;
    while (currentIndex < targetIndex) {
      currentNode = currentNode.next;
      currentIndex++;
    }
    return currentNode;
  }

  pop() {
    if (this.head !== null) {
      if (this.length === 1) {
        this.head = null;
      } else {
        let prevNode = null;
        let currentNode = this.head;
        while (currentNode.next !== null) {
          prevNode = currentNode;
          currentNode = currentNode.next;
        }
        prevNode.next = null;
      }
      this.length--;
    }
  }

  log() {
    console.log("List:", this.head);
    console.log("Size:", this.size());
  }
}

export default LinkedList;

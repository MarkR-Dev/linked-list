import Node from "./node.mjs";

class LinkedList {
  constructor() {
    this.head = null;
  }

  // Append new node to the head if the list is empty or loop until the tail and append
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
  }

  // Assign the current list to the new node's next pointer and point the head at the new node
  prepend(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  log() {
    console.log("List:", this.head);
  }
}

export default LinkedList;

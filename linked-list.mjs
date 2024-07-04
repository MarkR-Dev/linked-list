import Node from "./node.mjs";

class LinkedList {
  constructor() {
    this.head = null;
  }

  // Append new node to the head if the list is empty or loops until the tail and append there
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

  log() {
    console.log("List:", this.head);
  }
}

export default LinkedList;

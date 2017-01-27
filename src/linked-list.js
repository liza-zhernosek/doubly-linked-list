class Node {
    constructor(data = null, prev = null, next = null) {
        this.data = data;
        this.prev = prev;
        this.next = next;
    }
}

class LinkedList {
  constructor() {
    this.length = 0;   //initial length of linked list
    this._head = null;  //first node of linked list
    this._tail = null;  //last node of linked list
  }

  append(data) {
    this.length++;
    var newNode = new Node(data, null, null);
    this._head = newNode;
    this._tail = newNode;
  }

  head() {
    return this._head.data;
  }

  tail() {
    return this._tail.data;
  }

  at(index) {
    var currentNode = this._head;
    for (var i = 0; i < index; i++) {   //iterate through linked list
      currentNode = currentNode.next;
    }
    return currentNode.data;
  }

  insertAt(index, data) {}

  isEmpty() {
    if (this.length !== 0) {
      return false;
    } else {
      return true;
    }
  }

  clear() {}

  deleteAt(index) {}

  reverse() {}

  indexOf(data) {}
}

module.exports = LinkedList;

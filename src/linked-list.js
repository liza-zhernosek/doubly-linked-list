const Node = require('./node');

class LinkedList {
  constructor() {
    this.length = 0;   //initial length of linked list
    this._head = null;  //first node of linked list
    this._tail = null;  //last node of linked list
  }

  append(data) {
    var newNode;
    if (this.length === 0) {
      newNode = new Node(data, null, null);
      this._head = newNode;
    } else {
      newNode = new Node(data, this._tail, null);
      this._tail.next = newNode;
    }

    this.length++;
    this._tail = newNode;   
  }

  head() {
    return this._head.data;
  }

  tail() {
    return this._tail.data;
  }

  _at(index) {
    var currentNode = this._head;
    for (var i = 0; i < index; i++) {   //iterate through linked list
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  at(index) {
    return this._at(index).data;
  }

  insertAt(index, data) {
    var prevNode = this._at(index - 1);
    var nextNode = this._at(index);
    var newNode = new Node(data, prevNode, nextNode);

    prevNode.next = newNode;
    nextNode.prev = newNode;
    this.length++;
  }

  isEmpty() {
    if (this.length !== 0) {
      return false;
    } else {
      return true;
    }
  }

  clear() {
    this.length = 0;
    this._head = null;
    this._tail = null;
  }

  deleteAt(index) {}

  reverse() {}

  indexOf(data) {}
}

module.exports = LinkedList;

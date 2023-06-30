/// new implementation ///

"use strict";

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(headValue) {
    this.head = new Node(headValue);
  }
  // inserts a new node to the beginning of the list (replaces head, moves previous head + all other nodes 1 position )
  insert = (newHeadValue) => {
    let newList = new LinkedList(newHeadValue);
    newList.head.next = this.head;
    this.head = newList.head;
  };

  // iterates through the list and attempts to find a value to return, if no value is found returns null
  includes = (searchValue) => {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === searchValue) {
        return true;
      } else if (currentNode.next) {
        currentNode = currentNode.next;
      } else return false;
    }
  };
  // returns a string of the entire linked list's contents
  toString = () => {
    let listValueArr = [];
    let currentNode = this.head;
    while (currentNode) {
      listValueArr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    let listString = listValueArr.join(" -> ").toString();
    return `${listString} -> NULL`;
  };
  // adds a node to the end of the list
  append = (newValue) => {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.next === null) {
        currentNode.next = new Node(newValue);
        break;
      } else {
        currentNode = currentNode.next;
      }
    }
  };

  insertBefore = (searchValue, newValue) => {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.next.value === searchValue) {
        let ogNext = currentNode.next;
        currentNode.next = new Node(newValue);
        currentNode.next.next = ogNext;
        break;
      } else if (currentNode.next === null) {
        console.log("Cannot insert before, no value found");
        break;
      } else {
        currentNode = currentNode.next;
      }
    }
  };

  insertAfter = (searchValue, newValue) => {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === searchValue) {
        let ogNext = currentNode.next;
        currentNode.next = new Node(newValue);
        currentNode.next.next = ogNext;
        break;
      } else if (currentNode.next === null) {
        console.log("Cannot insert after, end of list");
        break;
      } else {
        currentNode = currentNode.next;
      }
    }
  };
}

module.exports = { LinkedList, Node };

"use strict";

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}
/* ================================================= */
class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  insert(value) {
    const new_node = new Node(value);
    if (!this.head) {
      this.head = new_node;
    } else {
      new_node.next = this.head;
      this.head = new_node;
    }
  }

  includes(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return true;
      } else {
        current = current.next;
      }
    }
    if (current === null) {
      return false;
    }
  }

  to_string() {
    let current = this.head;
    let result = "";
    while (current) {
      result += `{ ${current.value} } -> `;
      current = current.next;
    }
    result += "NULL";
    return result;
  }
}
const mylist = new LinkedList();
mylist.insert("abuqarea");
mylist.insert("mohannad");
mylist.insert("hello");
console.log(mylist);
module.exports = LinkedList;

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
  }

  enqueue(value) {
    const new_node = new Node(value);
    if (this.isEmpty()) {
      this.front = new_node;
      this.back = new_node;
    } else {
      this.back.next = new_node;
      this.back = new_node;
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    }
    const front_value = this.front.value;
    this.front = this.front.next;
    if (this.front === null) {
      this.back = null;
    }
    return front_value;
  }

  peek() {
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    }
    return this.front.value;
  }

  isEmpty() {
    return this.front === null;
  }
}
module.exports = { Node, Queue };

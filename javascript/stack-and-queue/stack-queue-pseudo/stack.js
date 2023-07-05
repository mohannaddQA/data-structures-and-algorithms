class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    const new_node = new Node(value);
    if (this.top === null) {
      this.top = new_node;
    } else {
      new_node.next = this.top;
      this.top = new_node;
    }
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error("Stack is empty");
    }
    const top_value = this.top.value;
    this.top = this.top.next;
    return top_value;
  }

  peek() {
    if (this.isEmpty()) {
      throw new Error("Stack is empty");
    }
    return this.top.value;
  }

  isEmpty() {
    return this.top === null;
  }
}
module.exports = { Node, Stack };

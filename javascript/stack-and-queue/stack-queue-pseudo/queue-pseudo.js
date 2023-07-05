const { Node, Stack } = require("./stack");

class PseudoQueue {
  constructor() {
    this.stackA = new Stack();
    this.stackB = new Stack();
  }

  enqueue(value) {
    this.stackA.push(value);
  }

  dequeue() {
    if (this.stackA.isEmpty() && this.stackB.isEmpty()) {
      throw new Error("PseudoQueue is empty");
    } else if (this.stackB.isEmpty()) {
      while (!this.stackA.isEmpty()) {
        this.stackB.push(this.stackA.pop());
      }
    }
    return this.stackB.pop();
  }
}

module.exports = PseudoQueue;

const { Stack, Queue } = require("./index");

describe("Stack", () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  test("Can successfully push onto a stack", () => {
    stack.push(10);
    expect(stack.peek()).toBe(10);
  });

  test("Can successfully push multiple values onto a stack", () => {
    stack.push(10);
    stack.push(20);
    stack.push(30);
    expect(stack.peek()).toBe(30);
  });

  test("Can successfully pop off the stack", () => {
    stack.push(10);
    stack.push(20);
    const poppedValue = stack.pop();
    expect(poppedValue).toBe(20);
    expect(stack.peek()).toBe(10);
  });

  test("Can successfully empty a stack after multiple pops", () => {
    stack.push(10);
    stack.push(20);
    stack.pop();
    stack.pop();
    expect(stack.isEmpty()).toBe(true);
  });

  test("Can successfully peek the next item on the stack", () => {
    stack.push(10);
    stack.push(20);
    expect(stack.peek()).toBe(20);
  });

  test("Can successfully instantiate an empty stack", () => {
    expect(stack.isEmpty()).toBe(true);
  });

  test("Calling pop on empty stack raises exception", () => {
    expect(() => stack.pop()).toThrow(Error);
  });

  test("Calling peek on empty stack raises exception", () => {
    expect(() => stack.peek()).toThrow(Error);
  });
});

describe("Queue", () => {
  let queue;

  beforeEach(() => {
    queue = new Queue();
  });

  test("Can successfully enqueue into a queue", () => {
    queue.enqueue(10);
    expect(queue.peek()).toBe(10);
  });

  test("Can successfully enqueue multiple values into a queue", () => {
    queue.enqueue(10);
    queue.enqueue(20);
    queue.enqueue(30);
    expect(queue.peek()).toBe(10);
  });

  test("Can successfully dequeue out of a queue the expected value", () => {
    queue.enqueue(10);
    queue.enqueue(20);
    const dequeuedValue = queue.dequeue();
    expect(dequeuedValue).toBe(10);
    expect(queue.peek()).toBe(20);
  });

  test("Can successfully peek into a queue, seeing the expected value", () => {
    queue.enqueue(10);
    queue.enqueue(20);
    expect(queue.peek()).toBe(10);
  });

  test("Can successfully empty a queue after multiple dequeues", () => {
    queue.enqueue(10);
    queue.enqueue(20);
    queue.dequeue();
    queue.dequeue();
    expect(queue.isEmpty()).toBe(true);
  });

  test("Can successfully instantiate an empty queue", () => {
    expect(queue.isEmpty()).toBe(true);
  });

  test("Calling dequeue on empty queue raises exception", () => {
    expect(() => queue.dequeue()).toThrow(Error);
  });

  test("Calling peek on empty queue raises exception", () => {
    expect(() => queue.peek()).toThrow(Error);
  });
});

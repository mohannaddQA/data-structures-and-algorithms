// Import the PseudoQueue class from your implementation
const PseudoQueue = require("./queue-pseudo");

describe("PseudoQueue", () => {
  describe("enqueue", () => {
    it("should enqueue a value to the PseudoQueue", () => {
      const queue = new PseudoQueue();
      queue.enqueue(10);
      queue.enqueue(15);
      queue.enqueue(20);
      expect(queue.stackA.peek()).toEqual(20);
      expect(queue.stackA.top.next.value).toEqual(15);
      expect(queue.stackA.top.next.next.value).toEqual(10);
    });
  });

  describe("dequeue", () => {
    it("should dequeue a value from the PseudoQueue", () => {
      const queue = new PseudoQueue();
      queue.enqueue(5);
      queue.enqueue(10);
      queue.enqueue(15);
      queue.enqueue(20);
      expect(queue.dequeue()).toEqual(5);
      expect(queue.stackB.peek()).toEqual(10);
      expect(queue.stackB.top.next.value).toEqual(15);
      expect(queue.stackA.isEmpty()).toBe(true);
    });

    it("should throw an error when dequeue is called on an empty PseudoQueue", () => {
      const queue = new PseudoQueue();
      expect(() => queue.dequeue()).toThrow(Error);
      expect(() => queue.dequeue()).toThrow("PseudoQueue is empty");
    });
  });
});

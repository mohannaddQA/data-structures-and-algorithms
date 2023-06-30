"use strict";

// Require our linked list implementation
const { LinkedList, Node } = require("../index");

describe("Testing kthFromEnd method", () => {
  test("if k is greater than travelLength, return null", () => {
    let testList = new LinkedList("red");
    testList.append("blue");
    testList.append("green");

    expect(testList.kthFromEnd(3)).toEqual(null);
  });

  test("if k is less than 0, return null", () => {
    let testList = new LinkedList("red");
    testList.append("blue");
    testList.append("green");

    expect(testList.kthFromEnd(-1)).toEqual(null);
  });

  test("if k is equal to travelLength, return this.head.value", () => {
    let testList = new LinkedList("red");
    testList.append("blue");
    testList.append("green");

    expect(testList.kthFromEnd(2)).toEqual("red");
  });

  test("if travelLength is 0 (e.g. if length of list is 1), return this.head.value", () => {
    let testList = new LinkedList("red");

    expect(testList.kthFromEnd(0)).toEqual("red");
  });

  test("if travelLength is 0 (e.g. if length of list is 1), return this.head.value", () => {
    let testList = new LinkedList("red");
    testList.append("blue");
    testList.append("green");
    testList.append("purple");
    testList.append("orange");

    expect(testList.kthFromEnd(3)).toEqual("blue");
  });
});

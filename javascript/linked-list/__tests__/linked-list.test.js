"use strict";

const LinkedList = require("../index");

describe("LinkedList", () => {
  test("can create an empty linked list", () => {
    const mylist = new LinkedList();
    expect(mylist.head).toBeNull();
  });

  test("can  insert into the linked list", () => {
    const mylist = new LinkedList();
    mylist.insert("a");
    expect(mylist.head.value).toBe("a");
  });

  test("head points to the first node in the linked list", () => {
    const mylist = new LinkedList();
    mylist.insert("a");
    mylist.insert("b");
    expect(mylist.head.value).toBe("b");
  });

  test("can properly insert multiple nodes into the linked list", () => {
    const mylist = new LinkedList();
    mylist.insert("a");
    mylist.insert("b");
    mylist.insert("c");
    expect(mylist.head.value).toBe("c");
  });

  test("returns true when finding an existing value in the linked list", () => {
    const mylist = new LinkedList();
    mylist.insert("a");
    mylist.insert("b");
    mylist.insert("c");
    expect(mylist.includes("b")).toBe(true);
  });

  test("returns false when searching for a non-existing value in the linked list", () => {
    const mylist = new LinkedList();
    mylist.insert("a");
    mylist.insert("b");
    mylist.insert("c");
    expect(mylist.includes("d")).toBe(false);
  });

  test("can properly return a collection of all values in the linked list", () => {
    const mylist = new LinkedList();
    mylist.insert("a");
    mylist.insert("b");
    mylist.insert("c");
    expect(mylist.to_string()).toBe("{ c } -> { b } -> { a } -> NULL");
  });
});

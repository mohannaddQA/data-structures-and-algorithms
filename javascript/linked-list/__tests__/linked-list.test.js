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

  // Test case 4: Can properly insert multiple nodes into the linked list
  test("can properly insert multiple nodes into the linked list", () => {
    const mylist = new LinkedList();
    mylist.insert("a");
    mylist.insert("b");
    mylist.insert("c");
    expect(mylist.head.value).toBe("c");
  });

  // Test case 5: Will return true when finding a value within the linked list that exists
  test("returns true when finding an existing value in the linked list", () => {
    const mylist = new LinkedList();
    mylist.insert("a");
    mylist.insert("b");
    mylist.insert("c");
    expect(mylist.includes("b")).toBe(true);
  });

  // Test case 6: Will return false when searching for a value in the linked list that does not exist
  test("returns false when searching for a non-existing value in the linked list", () => {
    const mylist = new LinkedList();
    mylist.insert("a");
    mylist.insert("b");
    mylist.insert("c");
    expect(mylist.includes("d")).toBe(false);
  });

  // Test case 7: Can properly return a collection of all the values that exist in the linked list
  test("can properly return a collection of all values in the linked list", () => {
    const mylist = new LinkedList();
    mylist.insert("a");
    mylist.insert("b");
    mylist.insert("c");
    expect(mylist.to_string()).toBe("{ c } -> { b } -> { a } -> NULL");
  });
});

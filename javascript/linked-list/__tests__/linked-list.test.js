"use strict";

const LinkedList = require("../index");

describe("LinkedList", () => {
  test("can create an empty linked list", () => {
    const mylist = new LinkedList();
    expect(mylist.head).toBeNull();
  });

  test("can  insert into the linked list", () => {
    const mylist = new LinkedList();
    mylist.insert("hello");
    expect(mylist.head.value).toBe("hello");
  });

  test("head points to the first node in the linked list", () => {
    const mylist = new LinkedList();
    mylist.insert("mohannad");
    mylist.insert("hello");
    expect(mylist.head.value).toBe("hello");
    expect(mylist.head.next.value).toEqual("mohannad");
  });

  test("can properly insert multiple nodes into the linked list", () => {
    const mylist = new LinkedList();
    mylist.insert("abuqarea");
    mylist.insert("mohannad");
    mylist.insert("hello");
    expect(mylist.head.value).toBe("hello");
  });

  test("returns true when finding an existing value in the linked list", () => {
    const mylist = new LinkedList();
    mylist.insert("abuqarea");
    mylist.insert("mohannad");
    mylist.insert("hello");
    expect(mylist.includes("mohannad")).toBe(true);
  });

  test("returns false when searching for a non-existing value in the linked list", () => {
    const mylist = new LinkedList();
    mylist.insert("abuqarea");
    mylist.insert("mohannad");
    mylist.insert("hello");
    expect(mylist.includes("d")).toBe(false);
  });

  test("can properly return a collection of all values in the linked list", () => {
    const mylist = new LinkedList();
    mylist.insert("abuqarea");
    mylist.insert("mohannad");
    mylist.insert("hello");
    expect(mylist.to_string()).toBe(
      "{ hello } -> { mohannad } -> { abuqarea } -> NULL"
    );
  });
});

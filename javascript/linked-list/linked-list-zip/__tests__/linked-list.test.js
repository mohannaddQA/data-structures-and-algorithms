"use strict";

// Require our linked list implementation
const { LinkedList, Node, zipLists } = require("../index");

describe("Testing zipLists method", () => {
  test("Able to zip two lists of the same length together and return a new zipped list", () => {
    let myList = new LinkedList("red");
    let yourList = new LinkedList("orange");
    myList.append("yellow");
    yourList.append("green");
    myList.append("blue");
    yourList.append("purple");

    expect(zipLists(myList, yourList).toString()).toEqual(
      "red -> orange -> yellow -> green -> blue -> purple -> NULL"
    );
  });

  test("Able to zip two lists of different lengths together and return a new zipped list", () => {
    let myList = new LinkedList("red");
    let yourList = new LinkedList("orange");
    myList.append("yellow");
    myList.append("blue");

    expect(zipLists(myList, yourList).toString()).toEqual(
      "red -> orange -> yellow -> blue -> NULL"
    );
  });

  test("Able to zip two lists with a length of 1 each", () => {
    let myList = new LinkedList("red");
    let yourList = new LinkedList("orange");

    expect(zipLists(myList, yourList).toString()).toEqual(
      "red -> orange -> NULL"
    );
  });

  test("Non-LinkedList arguments will throw an error", () => {
    let myList = "new LinkedList(red)";
    let yourList = "new LinkedList(orange)";

    expect(() => zipLists(myList, yourList)).toThrow();
  });
});

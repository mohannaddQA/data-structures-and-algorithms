"use strict";
const { LinkedList } = require("./linkedlist");

class Hashtable {
  constructor(size) {
    this.size = size;
    this.table = new Array(size);
  }

  hash(key) {
    const asciiCodeSum = key.split("").reduce((acc, char) => {
      return acc + char.charCodeAt();
    }, 0);
    const multiPrime = asciiCodeSum * 599;
    const theIndex = multiPrime % this.size;
    return theIndex;
  }

  set(key, value) {
    const hash = this.hash(key);
    if (!this.table[hash]) {
      this.table[hash] = new LinkedList();
    }

    const existingValue = this.get(key); // Check if the key already exists
    if (existingValue !== null) {
      // Key already exists, so update the value
      this.table[hash].head.value[key] = value;
    } else {
      // Key doesn't exist, so append a new entry
      this.table[hash].append({ [key]: value });
    }
  }

  get(key) {
    const hash = this.hash(key);
    if (!this.table[hash]) {
      return null;
    }

    let current = this.table[hash].head;
    while (current) {
      const entry = current.value;
      if (entry.hasOwnProperty(key)) {
        return entry[key];
      }
      current = current.next;
    }

    return null;
  }

  has(key) {
    const hash = this.hash(key);
    if (!this.table[hash]) {
      return false;
    }

    let current = this.table[hash].head;
    while (current) {
      const entry = current.value;
      if (entry.hasOwnProperty(key)) {
        return true;
      }
      current = current.next;
    }

    return false;
  }

  keys() {
    const keys = [];
    for (let i = 0; i < this.size; i++) {
      if (this.table[i]) {
        let current = this.table[i].head;
        while (current) {
          const entry = current.value;
          keys.push(Object.keys(entry)[0]);
          current = current.next;
        }
      }
    }
    return keys;
  }
}
module.exports = { Hashtable };

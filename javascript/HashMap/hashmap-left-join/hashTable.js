"use strict";
const { LinkedList } = require("../../linked-list/linked-list-kth/index");

class HashTable {
  constructor(size) {
    this.size = size;
    this.buckets = new Array(size);
  }
  hash = (key) => {
    key = `${key}`;
    let spreadKey = [...key];

    let hashedKeys = [];

    spreadKey.forEach((k, idx) => {
      hashedKeys.push(`${key}`.charCodeAt(idx));
    });

    return (
      (hashedKeys.reduce(
        (previousValue, currentValue) => previousValue * currentValue,
        1
      ) *
        599) %
      this.buckets.length
    );
  };

  set = (key, value) => {
    let hashValue = this.hash(key);

    if (!this.buckets[hashValue]) {
      this.buckets[hashValue] = new LinkedList({ [key]: value });
    } else {
      this.buckets[hashValue].append({ [key]: value });
    }
  };

  get = (key) => {
    let hashValue = this.hash(key);

    if (!this.buckets[hashValue]) {
      return null;
    } else {
      let currentNode = this.buckets[hashValue].head;
      while (currentNode) {
        if (currentNode.value[key]) {
          return currentNode.value;
        } else if (currentNode.next) {
          currentNode = currentNode.next;
        } else return null;
      }
    }
  };

  has = (key) => {
    let hashValue = this.hash(key);

    if (!this.buckets[hashValue]) {
      return false;
    } else {
      let currentNode = this.buckets[hashValue].head;
      while (currentNode) {
        if (currentNode.value[key]) {
          return true;
        } else if (currentNode.next) {
          currentNode = currentNode.next;
        } else return false;
      }
    }
  };

  keys = () => {
    let uniqueKeys = [];

    this.buckets.forEach((bucket) => {
      if (bucket.head) {
        let currentNode = bucket.head;

        while (currentNode) {
          let bucketValueKeys = Object.keys(bucket.head.value);

          bucketValueKeys.forEach((key) => {
            if (!uniqueKeys.includes(key)) {
              uniqueKeys.push(key);
            }
          });

          if (currentNode.next) {
            currentNode = currentNode.next;
          } else break;
        }
      }
    });

    return uniqueKeys;
  };
}

module.exports = {
  HashTable,
};

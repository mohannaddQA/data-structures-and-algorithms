"use strict";
const { HashTable } = require("./hashTable");

const leftJoin = (leftTable, rightTable) => {
  if (leftTable instanceof HashTable && rightTable instanceof HashTable) {
    let uniqueKeys = leftTable.keys();
    let arrOfJoin = [];

    uniqueKeys.forEach((key) => {
      let valueB = rightTable.get(key);
      let valueA = leftTable.get(key);
      let values;

      if (valueB) {
        values = [valueA[key], valueB[key]];
      } else {
        values = [valueA[key], null];
      }

      arrOfJoin.push({ [key]: values });
    });

    return arrOfJoin;
  } else {
    console.log("Both arguments  must be a HashTable");
  }
};

module.exports = {
  leftJoin,
};

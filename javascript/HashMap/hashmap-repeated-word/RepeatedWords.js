const { Hashtable } = require("./hashTable");

function repeatedWord(str) {
  const wordsArray = str.toLowerCase().split(" ");
  const wordTable = new Hashtable(wordsArray.length);

  for (const word of wordsArray) {
    if (wordTable.has(word)) {
      // if you find the word ==> return it
      return word;
    } else {
      wordTable.set(word, true); // if you didn't find it , then add it ==> so it keeps track of each encountered word
    }
  }

  return null;
}

module.exports = { repeatedWord };

const { repeatedWord } = require("./RepeatedWords"); // Replace with the correct file path

describe("repeatedWord", () => {
  it(" return the first repeated word in a sentence", () => {
    const sentence1 = "Once upon a time, there was a brave princess who...";
    const sentence2 =
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...";

    expect(repeatedWord(sentence1)).toBe("a");
    expect(repeatedWord(sentence2)).toBe("it");
  });

  it("return null for a sentence with no repeated words", () => {
    const sentence = "This is a test sentence with no repeated words.";

    expect(repeatedWord(sentence)).toBeNull();
  });

  it("handle case-insensitivity", () => {
    const sentence = "Case-insensitive test . This is a Test .";

    expect(repeatedWord(sentence)).toBe("test");
  });
});

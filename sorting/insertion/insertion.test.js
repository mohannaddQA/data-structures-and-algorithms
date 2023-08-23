const { InsertionSort, Insert } = require("./insertion"); // Update the path

describe("Insertion Sort", () => {
  it("should sort an array using InsertionSort", () => {
    const input = [8, 4, 23, 42, 16, 15];
    const expectedOutput = [4, 8, 15, 16, 23, 42];
    const result = InsertionSort(input);
    expect(result).toEqual(expectedOutput);
  });
});

describe("Insert", () => {
  it("should insert a value into a sorted array", () => {
    const sortedArray = [4, 8, 15, 23];
    const valueToInsert = 16;
    const expectedOutput = [4, 8, 15, 16, 23];
    Insert(sortedArray, valueToInsert);
    expect(sortedArray).toEqual(expectedOutput);
  });
});

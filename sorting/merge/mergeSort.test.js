const { Mergesort, Merge } = require("./mergeSort");

describe("Merge Sort", () => {
  it("should sort an array in ascending order", () => {
    const input = [8, 4, 23, 42, 16, 15];
    const expectedOutput = [4, 8, 15, 16, 23, 42];

    Mergesort(input);
    expect(input).toEqual(expectedOutput);
  });

  it("should handle an empty array", () => {
    const input = [];
    const expectedOutput = [];

    Mergesort(input);
    expect(input).toEqual(expectedOutput);
  });

  it("should handle an array with a single element", () => {
    const input = [5];
    const expectedOutput = [5];

    Mergesort(input);
    expect(input).toEqual(expectedOutput);
  });
});

describe("Merge Function", () => {
  it("should merge two sorted arrays", () => {
    const left = [4, 8, 15];
    const right = [16, 23, 42];
    const arr = [];

    Merge(left, right, arr);
    expect(arr).toEqual([4, 8, 15, 16, 23, 42]);
  });

  it("should handle empty arrays", () => {
    const left = [];
    const right = [];
    const arr = [];

    Merge(left, right, arr);
    expect(arr).toEqual([]);
  });

  it("should handle arrays of different lengths", () => {
    const left = [4, 8];
    const right = [15, 16, 23, 42];
    const arr = [];

    Merge(left, right, arr);
    expect(arr).toEqual([4, 8, 15, 16, 23, 42]);
  });
});

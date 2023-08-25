const { movies, sortReleaseYear, sortAlphabetically } = require("./comparison");

test("Sorting movies by release year", () => {
  const sorted = sortReleaseYear(movies);
  expect(sorted[0].name).toBe("Joker");
  expect(sorted[sorted.length - 1].name).toBe("Titanic");
});

test("Sorting movies alphabetically", () => {
  const sorted = sortAlphabetically(movies);
  expect(sorted[0].name).toBe("The Dark Knight");
  expect(sorted[sorted.length - 1].name).toBe("Titanic");
});

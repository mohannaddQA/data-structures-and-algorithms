class Movie {
  constructor(name, releaseYear, genres) {
    this.name = name;
    this.releaseYear = releaseYear;
    this.genres = genres;
  }
}

const movies = [
  new Movie("The Dark Knight", 2008, ["Action", "Drama"]),
  new Movie("Inception", 2010, ["Action", "Sci-Fi"]),
  new Movie("Titanic", 1997, ["Drama", "Romance"]),
  new Movie("The Matrix", 1999, ["Action", "Sci-Fi"]),
  new Movie("Joker", 2019, ["Crime", "Drama"]),
];

function sortReleaseYear(Movies) {
  const sorted = Movies.sort((a, b) => b.releaseYear - a.releaseYear);
  return sorted;
}

function sortAlphabetically(Movies) {
  const sorted = Movies.sort((a, b) => {
    const nameA = a.name.replace(/^(A|An|The)\s/i, "");
    const nameB = b.name.replace(/^(A|An|The)\s/i, "");
    return nameA.localeCompare(nameB);
  });
  return sorted;
}

module.exports = {
  movies,
  sortReleaseYear,
  sortAlphabetically,
};

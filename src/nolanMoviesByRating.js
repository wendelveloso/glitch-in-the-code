const movies = require("../data/movies");

const nolanMoviesByRating = (movies) => {
  return movies
    .filter((element) => element.diretor.includes("Nolan"))
    .sort((a, b) => b.avaliacao - a.avaliacao);
};

module.exports = {
  nolanMoviesByRating,
};

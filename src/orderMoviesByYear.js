const movies = require("../data/movies");

const orderMoviesByYear = (movies) => {
  const newOrderMovies = [...movies];
  return newOrderMovies.sort((a, b) => a.anoLancamento - b.anoLancamento);
};

module.exports = {
  orderMoviesByYear,
};

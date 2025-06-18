const movies = require("../data/movies");

const highestRatedMovie = (movies) => {
  if (movies.length === 0) return undefined;

  return movies.reduce((maior, atual) => {
    if (atual.avaliacao > maior.avaliacao) {
      return atual;
    } else {
      return maior;
    }
  });
};

module.exports = {
  highestRatedMovie,
};

const movies = require("../data/movies");

const availableMovies = (movies) => {
  return movies
    .filter((element) => element.disponivel === true)
    .map((element) => element.titulo);
};

module.exports = {
  availableMovies,
};

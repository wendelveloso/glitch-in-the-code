const movies = require("../data/movies");

function getMovieById(id) {
  return movies.find((element) => element.id === id);
}

module.exports = {
  getMovieById,
};

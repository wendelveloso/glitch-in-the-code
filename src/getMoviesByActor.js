const movies = require("../data/movies");

function getMoviesByActor(ator) {
  return movies.filter((element) => element.elenco.includes(ator));
}

module.exports = {
  getMoviesByActor,
};

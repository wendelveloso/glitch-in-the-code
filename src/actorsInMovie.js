const movies = require("../data/movies");

const actorsInMovie = (titulo) => {
  const movieFound = movies.find((element) => element.titulo === titulo);
  if (!movieFound) {
    return "Filme não encontrado.";
  }
  if (
    !movieFound.elenco ||
    movieFound.titulo === "" ||
    movieFound.titulo === null
  ) {
    return "Não possui elenco, título é nulo ou vazio";
  }

  return movieFound.elenco.slice(0, 2);
};

module.exports = {
  actorsInMovie,
};

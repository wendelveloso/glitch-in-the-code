const movies = require("../data/movies");

function categorizeMovies(movies, details = true) {
  const result = movies.reduce((acumulador, filme) => {
    filme.genero.forEach((genero) => {
      if (!acumulador[genero]) {
        acumulador[genero] = [];
      }
      if (details) {
        acumulador[genero].push({
          anoLancamento: filme.anoLancamento,
          avaliacao: filme.avaliacao,
          diretor: filme.diretor,
          id: filme.id,
          titulo: filme.titulo,
        });
      } else {
        acumulador[genero].push(filme.titulo);
      }
    });
    return acumulador;
  }, {});
  Object.keys(result).forEach((genero) => {
    result[genero].sort((a, b) => {
      const tituloA = details ? a.titulo : a;
      const tituloB = details ? b.titulo : b;
      return tituloA.localeCompare(tituloB);
    });
  });
  return result;
}

module.exports = {
  categorizeMovies,
};

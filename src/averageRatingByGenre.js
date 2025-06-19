const movies = require("../data/movies");
function averageRatingByGenre(genero) {
  if (!genero) {
    return "O parâmetro é obrigatório.";
  }
  if (typeof genero !== "string") {
    return "O parâmetro tem que ser uma string.";
  }
  const filteredMovies = movies.filter((element) =>
    element.genero.includes(genero)
  );

  if (filteredMovies.length === 0) {
    return `Não há filmes do gênero ${genero}.`;
  }

  const media =
    filteredMovies.reduce((soma, numero) => soma + numero.avaliacao, 0) /
    filteredMovies.length;

  return `A média de avaliação dos filmes do gênero ${genero} é ${media.toFixed(
    2
  )}.`;
}

module.exports = {
  averageRatingByGenre,
};

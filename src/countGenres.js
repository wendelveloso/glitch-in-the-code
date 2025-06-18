const movies = require("../data/movies");

function countGenres(movies) {
  return movies
    .map((element) => element.genero)
    .flat()
    .reduce((todosGeneros, genero) => {
      if (genero in todosGeneros) {
        todosGeneros[genero]++;
      } else {
        todosGeneros[genero] = 1;
      }
      return todosGeneros;
    }, {});
}

module.exports = {
  countGenres,
};

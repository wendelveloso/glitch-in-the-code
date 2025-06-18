const { list1 } = require("../data/list1");

const displayMovies = (movies) => {
  movies.map((element) => {
    console.log(`Título: ${element.titulo} - Diretor: ${element.diretor}`);
  });
};

module.exports = {
  displayMovies,
};

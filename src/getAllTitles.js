const movies = require("../data/movies");

const getAllTitles = (movies) => {
  return movies.map((element) => element.titulo);
};

console.log(getAllTitles(movies));

module.exports = {
  getAllTitles,
};

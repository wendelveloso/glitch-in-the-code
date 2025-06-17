const movies = require("../data/movies");

const getAllTitles = (movies) => {
  return movies.map((element) => element.titulo);
};

module.exports = {
  getAllTitles,
};

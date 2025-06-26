const movies = require("../data/movies");

function classifyMovies(movies) {
  const arr1 = [];
  const arr2 = [];
  const arr3 = [];
  const disp = [];
  const notDisp = [];

  movies.forEach((filme) => {
    const info = {
      titulo: filme.titulo,
      diretor: filme.diretor,
      genero: filme.genero,
      anoLancamento: filme.anoLancamento,
      avaliacao: filme.avaliacao,
    };

    if (filme.avaliacao < 5) {
      arr1.push(info);
    } else if (filme.avaliacao < 8) {
      arr2.push(info);
    } else {
      arr3.push(info);
    }

    if (filme.disponivel) {
      disp.push({
        titulo: filme.titulo,
      });
    } else {
      notDisp.push({
        titulo: filme.titulo,
      });
    }
  });

  arr1.sort((a, b) => a.titulo.localeCompare(b.titulo));
  arr2.sort((a, b) => a.titulo.localeCompare(b.titulo));
  arr3.sort((a, b) => a.titulo.localeCompare(b.titulo));

  return {
    avaliacao: {
      "0-4.9": arr1,
      "5.0-7.9": arr2,
      "8.0-10.0": arr3,
    },
    disponibilidade: {
      disponiveis: disp,
      naoDisponiveis: notDisp,
    },
  };
}

module.exports = {
  classifyMovies,
};

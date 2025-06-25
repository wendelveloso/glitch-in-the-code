const movies = require("../data/movies");

function listOverdueLoans(movies) {
  const atrasados = [];

  movies.forEach((filme) => {
    filme.emprestimos.forEach((emprestimo) => {
      const dataDevolucao = new Date(emprestimo.dataDevolucao);

      if (dataDevolucao < new Date()) {
        atrasados.push({
          id: filme.id,
          titulo: filme.titulo,
          dataEmprestimo: emprestimo.dataEmprestimo,
          dataDevolucao: emprestimo.dataDevolucao,
          status: "atrasado",
        });
      }
    });
  });

  return atrasados;
}

module.exports = {
  listOverdueLoans,
};

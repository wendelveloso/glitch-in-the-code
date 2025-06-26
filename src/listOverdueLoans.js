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
          dataDevolucao: emprestimo.dataDevolucao,
          dataEmprestimo: emprestimo.dataEmprestimo,
          nomePessoa: emprestimo.nomePessoa,
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

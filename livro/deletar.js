const { lerDados, criarDados } = require("./gerenciarDados");

function deletarLivro(req, res) {
    const Livros = lerDados('livros');
    const { id } = req.params;

    const livroIndex = Livros.findIndex(livro => livro.id === parseInt(id))

    if (livroIndex === -1) {
        return res.status(404).send('Livro não encontrado.');
    }

    Livros.splice(livroIndex, 1);
    criarDados(Livros, 'livros');

    return res.status(200).send('Livro deletado com sucesso!');
}

function deletarAluno(req, res) {
    const Estudantes = lerDados('estudantes');
    const { id } = req.params;

    const estudanteIndex = Estudantes.findIndex(estudante => estudante.id === parseInt(id));

    if (estudanteIndex === -1) {
        return res.status(404).send('Estudante não encontrado.');
    }

    Estudantes.splice(estudanteIndex, 1);
    criarDados(Estudantes, 'estudantes');

    return res.status(200).send('Estudante deletado com sucesso!');
}

function deletarAluguel(req, res) {
    const Alugueis = lerDados('alugueis');
    const { id } = req.params;

    const aluguelIndex = Alugueis.findIndex(aluguel => aluguel.id === parseInt(id));

    if (aluguelIndex === -1) {
        return res.status(404).send('Aluguel não encontrado.');
    }

    Alugueis.splice(aluguelIndex, 1);
    criarDados(Alugueis, 'alugueis');

    return res.status(200).send('Aluguel deletado com sucesso!');
}

module.exports = { deletarLivro, deletarAluno, deletarAluguel }
const { lerDados } = require("./gerenciarDados");

function listarLivros(req, res) {
    const livros = lerDados('livros');

    if (!livros || livros.length === 0) {
        return res.status(404).send('Nenhum livro encontrado.');
    }

    return res.status(200).json(livros);
}

function listarAlunos(req, res) {
    const estudantes = lerDados('estudantes');

    if (!estudantes || estudantes.length === 0) {
        return res.status(404).send('Nenhum estudante encontrado.');
    }

    return res.status(200).json(estudantes);
}

function listarAlugueis(req, res) {
    const alugueis = lerDados('alugueis');

    if (!alugueis || alugueis.length === 0) {
        return res.status(404).send('Nenhum alugueç encontrado.');
    }

    return res.status(200).json(alugueis);
}

module.exports = { listarLivros, listarAlunos, listarAlugueis }
const { lerDados } = require("./gerenciarDados");

function listarLivros(res) {
    const livros = lerDados('livros');

    if (!livros || livros.length === 0) {
        return res.status(404).send('Nenhum livro encontrado.');
    }

    return res.status(200).json(livros);
}

function listarAlunos(res) {
    const alunos = lerDados('alunos');

    if (!alunos || alunos.length === 0) {
        return res.status(404).send('Nenhum aluno encontrado.');
    }

    return res.status(200).json(alunos);
}

function listarAlugueis(res) {
    const alugueis = lerDados('alugueis');

    if (!alugueis || alugueis.length === 0) {
        return res.status(404).send('Nenhum alugueç encontrado.');
    }

    return res.status(200).json(alugueis);
}

module.exports = { listarLivros, listarAlunos, listarAlugueis }
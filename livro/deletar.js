const { lerDados, criarDados } = require("./gerenciarDados");

function deletarLivro(req, res) {
    const livros = lerDados();
    const { id } = req.params;

    const livroIndex = livros.findIndex(livro => livro.id == id);

    if (livroIndex === -1) {
        return res.status(404).send('Livro não encontrado.');
    }

    livros.splice(livroIndex, 1);
    criarDados(livros);

    return res.status(200).send('Livro deletado com sucesso!');
}

module.exports = deletarLivro;
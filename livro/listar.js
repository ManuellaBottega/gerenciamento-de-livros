const { lerDados } = require("./gerenciarDados");

function listarLivros(req, res) {
    const livros = lerDados();

    if (!livros || livros.length === 0) {
        return res.status(404).send('Nenhum livro encontrado.');
    }

    return res.status(200).json(livros);
}

module.exports = listarLivros;
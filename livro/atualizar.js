const { lerDados, criarDados } = require("./gerenciarDados");

function atualizarLivro(req, res) {
    const livros = lerDados();
    const { id } = req.params;
    const { titulo, autor, ano, genero } = req.body;

    const livroIndex = livros.findIndex(livro => livro.id === parseInt(id));

    if (livroIndex === -1) {
        return res.status(404).send('Livro não encontrado.');
    }

    const livroAtualizado = {
        ...livros[livroIndex],
        titulo: titulo || livros[livroIndex].titulo,
        autor: autor || livros[livroIndex].autor,
        ano: ano || livros[livroIndex].ano,
        genero: genero || livros[livroIndex].genero
    };

    livros[livroIndex] = livroAtualizado;
    criarDados(livros);

    return res.status(200).json(livroAtualizado);
}

module.exports = atualizarLivro;
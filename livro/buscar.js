const { lerDados } = require("./gerenciarDados");

function buscarLivro(req, res) {
    const livros = lerDados();
    const { title, author, year, genre } = req.query;

    const resultados = livros.filter(livro => {
        let corresponde = true;

        if (title && livro.titulo !== title) {
            corresponde = false;
        }

        if (author && livro.autor !== author) {
            corresponde = false;
        }

        if (year && livro.ano != year) {
            corresponde = false;
        }

        if (genre && livro.genero !== genre) {
            corresponde = false;
        }

        return corresponde;
    });

    if (resultados.length === 0) {
        return res.status(404).send('Nenhum livro encontrado com os critérios de busca.');
    }

    return res.status(200).json(resultados);
}

module.exports = buscarLivro
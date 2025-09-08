const { lerDados } = require("./gerenciarDados");

function buscarLivro(req, res) {
    const livros = lerDados();
    const { titulo, autor, ano, genero } = req.query

    const resultados = livros.filter(livro => {
        let corresponde = true;

        if (titulo && !livro.titulo.toLowerCase().includes(titulo.toLowerCase())) {
            corresponde = false;
        }

        if (autor && !livro.autor.toLowerCase().includes(autor.toLowerCase())) {
            corresponde = false;
        }

        if (ano && !livro.ano.toLowerCase().includes(ano.toLowerCase())) {
            corresponde = false;
        }

        if (genero && !livro.genero.toLowerCase().includes(genero.toLowerCase())) {
            corresponde = false;
        }

        return corresponde;
    });

    if (resultados.length === 0) {
        return res.status(404).send('Nenhum livro encontrado com os critérios de busca.');
    }

    return res.status(200)
    .send(resultados.map((livro) => `
    id: ${ livro.id }
    titulo: ${ livro.titulo }
    autor: ${ livro.autor }
    ano: ${ livro.ano }
    genero: ${ livro.genero } 
 `).join('\n'));
}
module.exports = buscarLivro
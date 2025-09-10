const { lerDados } = require("./gerenciarDados");

function buscarLivro(req, res) {
    const Livros = lerDados('livros');
    const { titulo, autor, ano, genero } = req.query

    const resultados = Livros.filter(livro => {
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

function buscarAluno(req, res) {
    const Estudantes = lerDados('estudantes');
    const { nome, curso, ano, matricula } = req.query

    const resultados = Estudantes.filter(estudante => {
        let corresponde = true;

        if (nome && !estudante.nome.toLowerCase().includes(nome.toLowerCase())) {
            corresponde = false;
        }

        if (curso && !estudante.curso.toLowerCase().includes(curso.toLowerCase())) {
            corresponde = false;
        }

        if (ano && !estudante.ano.toLowerCase().includes(ano.toLowerCase())) {
            corresponde = false;
        }

        if (matricula && !estudante.matricula.toLowerCase().includes(matricula.toLowerCase())) {
            corresponde = false;
        }

        return corresponde;
    });

    if (resultados.length === 0) {
        return res.status(404).send('Nenhum estudante encontrado com os critérios de busca.');
    }

    return res.status(200)
    .send(resultados.map((estudante) => `
    id: ${ estudante.id }
    nome: ${ estudante.nome }
    curso: ${ estudante.curso }
    ano: ${ estudante.ano }
    matricula: ${ estudante.matricula } 
 `).join('\n'));
}

function buscarAluguel(req, res) {
    const Alugueis = lerDados('alugueis');
    const { idAluno, idLivro, dataAluguel, dataDevolucao } = req.query

    const resultados = Alugueis.filter(aluguel => {
        let corresponde = true;

        if (idAluno && !aluguel.idAluno.toLowerCase().includes(idAluno.toLowerCase())) {
            corresponde = false;
        }

        if (idLivro && !aluguel.idLivro.toLowerCase().includes(idLivro.toLowerCase())) {
            corresponde = false;
        }

        if (dataAluguel && !aluguel.dataAluguel.toLowerCase().includes(dataAluguel.toLowerCase())) {
            corresponde = false;
        }

        if (dataDevolucao && !aluguel.dataDevolucao.toLowerCase().includes(dataDevolucao.toLowerCase())) {
            corresponde = false;
        }

        return corresponde;
    });

    if (resultados.length === 0) {
        return res.status(404).send('Nenhum aluguel encontrado com os critérios de busca.');
    }

    return res.status(200)
    .send(resultados.map((aluguel) => `
    id: ${ aluguel.id }
    idAluno: ${ aluguel.idAluno }
    idLivro: ${ aluguel.idLivro }
    dataAluguel: ${ aluguel.dataAluguel }
    dataDevolucao: ${ aluguel.dataDevolucao } 
 `).join('\n'));
}

module.exports = { buscarLivro, buscarAluno, buscarAluguel }
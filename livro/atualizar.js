const { lerDados, criarDados } = require("./gerenciarDados");

function atualizarLivro(req, res) {
    const Livros = lerDados('livros');
    const { id } = req.params;
    const { titulo, autor, ano, genero } = req.body;

    const livroIndex = Livros.findIndex(livro => livro.id === parseInt(id));

    if (livroIndex === -1) {
        return res.status(404).send('Livro não encontrado.');
    }

    const livroAtualizado = {
        ...Livros[livroIndex],
        titulo: titulo || Livros[livroIndex].titulo,
        autor: autor || Livros[livroIndex].autor,
        ano: ano || Livros[livroIndex].ano,
        genero: genero || Livros[livroIndex].genero
    };

    Livros[livroIndex] = livroAtualizado;
    criarDados(Livros, 'livros');

    return res.status(200).json(livroAtualizado);
}

function atualizarAluno(req, res) {
    const Estudantes = lerDados('estudantes');
    const { id } = req.params;
    const { nome, curso, ano, matricula } = req.body;

    const alunoIndex = Estudantes.findIndex(aluno => aluno.id === parseInt(id));

    if (alunoIndex === -1) {
        return res.status(404).send('Estudante não encontrado.');
    }

    const alunoAtualizado = {
        ...Estudantes[alunoIndex],
        nome: nome || Estudantes[alunoIndex].nome,
        curso: curso || Estudantes[alunoIndex].curso,
        ano: ano || Estudantes[alunoIndex].ano,
        matricula: matricula || Estudantes[alunoIndex].matricula
    };

    Estudantes[alunoIndex] = alunoAtualizado;
    criarDados(Estudantes, 'estudantes');

    return res.status(200).json(alunoAtualizado);
}

function atualizarAluguel(req, res) {
    const Alugueis = lerDados('alugueis'); 
    const { id } = req.params;
    const { dataAluguel, dataDevolucao, idAluno, idLivro } = req.body;

    const aluguelIndex = Alugueis.findIndex(aluguel => aluguel.id === parseInt(id));

    if (aluguelIndex === -1) {
        return res.status(404).send('Aluguel não encontrado.');
    }

    const livroAtualizado = {
        ...Alugueis[aluguelIndex],
        dataAluguel: dataAluguel || Alugueis[aluguelIndex].dataAluguel,
        dataDevolucao: dataDevolucao || Alugueis[aluguelIndex].dataDevolucao,
        idAluno: idAluno || Alugueis[aluguelIndex].idAluno,
        idLivro: idLivro || Alugueis[aluguelIndex].idLivro
    };

    Alugueis[aluguelIndex] = livroAtualizado;
    criarDados(Alugueis, 'alugueis');

    return res.status(200).json(livroAtualizado);
}


module.exports = { atualizarLivro, atualizarAluno, atualizarAluguel }
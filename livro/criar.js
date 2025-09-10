const { lerDados, criarDados } = require("./gerenciarDados");
const livros = require('./livros.json')
const estudantes = require('./estudantes.json')

function criarLivro(req, res) {
    if(!validarLivro(req)) {
        return res.status(400).send('Dados do livro incompletos.');
     }
  
     if(!validarAno(req.body.ano)) {
        return res.status(400).send('Ano do livro inválido.');
     }

   const Livros = lerDados('livros');

   const novoLivro = {
      id: Date.now(),
      titulo: req.body.titulo,
      autor: req.body.autor,
      ano: req.body.ano,
      genero: req.body.genero
   }
   
   Livros.push(novoLivro)
   criarDados(Livros, 'livros');

   return res.status(201).json({ message: 'Livro salvo com sucesso!'});
}

function validarLivro(req) {
   if(!req.body || !req.body.titulo || !req.body.autor || !req.body.ano || !req.body.genero) {
      return false;
   }
   return true;
}

function validarAno(ano) {
   ano = parseInt(ano);
   const anoAtual = new Date().getFullYear();

   if(isNaN(ano) || ano < 0 || ano > anoAtual) {
      return false;
   }
   return true;
}

function criarAluno(req,res) {
   if(!validarAluno(req)) {
      return res.status(400).send('Dados do estudante incompletos.');
   }

   if(!validarAnoMatricula(req.body.ano, req.body.matricula)) {
      return res.status(400).send('Matricula e/ou Ano inválidos.');
   }

   const Estudantes = lerDados('estudantes');

   const novoAluno = {
      id: Date.now(),
      nome: req.body.nome,
      matricula: req.body.matricula,
      ano: req.body.ano,
      curso: req.body.curso
   }

   Estudantes.push(novoAluno)
   criarDados(Estudantes, 'estudantes');

   return res.status(201).json({ message: 'Estudante salvo com sucesso!'});
}

function validarAluno(req) {
   if(!req.body || !req.body.nome || !req.body.matricula || !req.body.ano || !req.body.curso) {
      return false;
   }
   return true;
}

function validarAnoMatricula(ano, matricula) {
   const anoInt = parseInt(ano);
   const matriculaInt = parseInt(matricula);
   if(isNaN(anoInt) || isNaN(matriculaInt) || anoInt < 0) {
      return false;
   }
   return true;
}

function criarAluguel(req, res) {
   if(!validarAluguel(req)) {
      return res.status(400).send('Dados do aluguel incompletos.');
   }

   if(!validarIDlivro(req.body.idLivro)) {
      return res.status(400).send('Livro nao encontrado ou inexistente.');
   }

   if(!validarIDaluno(req.body.idAluno)) {
      return res.status(400).send('Estudante nao encontrado ou inexistente.');
   }

   if(!validarDatas(req.body.dataAluguel)) {
      return res.status(400).send('Data invalida.');
   }

   const dataAluguel = req.body.dataAluguel;
   const dataDevolucao = new Date(dataAluguel);
   dataDevolucao.setDate(dataDevolucao.getDate() + 14);

   const Alugueis = lerDados('alugueis');

   const novoAluguel = {
      id: Date.now(),
      idLivro: req.body.idLivro,
      idAluno: req.body.idAluno,
      dataAluguel: dataAluguel,
      dataDevolucao: dataDevolucao.toISOString().split('T')[0]
   }

   Alugueis.push(novoAluguel)
   criarDados(Alugueis, 'alugueis');

   return res.status(201).json({ message: 'Aluguel salvo com sucesso!'});
}

function validarAluguel(req) {
   if(!req.body || !req.body.idLivro || !req.body.idAluno || !req.body.dataAluguel) {
      return false;
   }
   return true;
}

function validarIDaluno(idAluno) {
   return estudantes.some(aluno => aluno.id === parseInt(idAluno));
}

function validarIDlivro(idLivro) {
   return livros.some(livro => livro.id === parseInt(idLivro));
}

function validarDatas(dataAluguel) {
   const aluguel = new Date(dataAluguel);
   const hoje = new Date();

   if (isNaN(aluguel.getTime())) {
      return false;
   }

   aluguel.setHours(0, 0, 0, 0);
   hoje.setHours(0, 0, 0, 0);

   if (aluguel > hoje) {
       return false;
   }

   return true;
}

module.exports = { criarLivro, criarAluno, criarAluguel };

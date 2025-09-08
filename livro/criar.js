const { lerDados, criarDados } = require("./gerenciarDados");

function criarLivro(req, res) {
    if(!validarLivro(req)) {
        return res.status(400).send('Dados do livro incompletos.');
     }
  
     if(!validarAno(req.body.ano)) {
        return res.status(400).send('Ano do livro inválido.');
     }

   const Livros = lerDados();

    const novoLivro = {
        id: Date.now(),
        titulo: req.body.titulo,
        autor: req.body.autor,
        ano: req.body.ano,
        genero: req.body.genero
     }
   
   Livros.push(novoLivro)
   criarDados(Livros);

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

 module.exports = criarLivro;
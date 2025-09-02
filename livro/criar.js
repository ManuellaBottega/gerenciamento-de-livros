const { lerDados, criarDados } = require("./gerenciarDados");

function criarLivro(req, res) {
    if(!validarLivro(req)) {
        return res.status(400).send('Dados do livro incompletos.');
     }
  
     if(!validarAno(req.body.year)) {
        return res.status(400).send('Ano do livro inválido.');
     }

    const novoLivro = {
        id: Date.now(),
        titulo: req.body.titulo,
        autor: req.body.autor,
        ano: req.body.ano,
        genero: req.body.genero
     }

     const Livros = lerDados();
   console.log(Livros);

   if (!Livros) {
      writeData([novoLivro]);
      return res.status(201).send('Livro salvo com sucesso!');
   } 

   Livros.push(novoLivro);
   writeData(Livros);
   return res.status(201).send('Livro salvo com sucesso!');
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
 
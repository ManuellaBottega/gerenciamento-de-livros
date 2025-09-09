const express = require('express')
const router = express.Router()

const { criarLivro, criarAluno, criarAluguel } = require('./criar.js');
const { listarLivros, listarAlunos, listarAlugueis } = require('./listar');
const deletarLivro = require('./deletar');
const atualizarLivro = require('./atualizar');
const buscarLivro = require('./buscar');

router.post('/livro', criarLivro);
router.post('/estudante', criarAluno);
router.post('/aluguel', criarAluguel);
router.put('/livro/:id', atualizarLivro);
router.delete('/livro/:id', deletarLivro);
router.get('/livros', listarLivros)
router.get('/estudantes', listarAlunos)
router.get('/alugueis', listarAlugueis)
router.get('/livros/search', buscarLivro);

module.exports = router;
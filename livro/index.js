const express = require('express')
const router = express.Router()

const { criarLivro, criarAluno, criarAluguel } = require('./criar.js');
const { listarLivros, listarAlunos, listarAlugueis } = require('./listar');
const { deletarLivro, deletarAluno, deletarAluguel } = require('./deletar');
const { atualizarLivro, atualizarAluno, atualizarAluguel } = require('./atualizar');
const buscarLivro = require('./buscar');

router.post('/livro', criarLivro);
router.post('/estudante', criarAluno);
router.post('/aluguel', criarAluguel);
router.put('/livro/:id', atualizarLivro);
router.put('/estudante/:id', atualizarAluno);
router.put('/aluguel/:id', atualizarAluguel);
router.delete('/livro/:id', deletarLivro);
router.delete('/estudante/:id', deletarAluno);
router.delete('/aluguel/:id', deletarAluguel);
router.get('/livros', listarLivros)
router.get('/estudantes', listarAlunos)
router.get('/alugueis', listarAlugueis)
router.get('/livros/search', buscarLivro);

module.exports = router;
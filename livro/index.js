const express = require('express')
const router = express.Router

const criarLivro= require('./criar');
const listarLivros = require('./listar');
const deletarLivro = require('./deletar');
const atualizarLivro = require('./atualizar');
const buscarLivro = require('./buscar');

router.post('/livro', criarLivro);
router.put('/livro/:id', atualizarLivro);
router.delete('/livro/:id', deletarLivro);
router.get('/Livros', listarLivros)
router.get('/Livros/search', buscarLivro);

module.exports = router;
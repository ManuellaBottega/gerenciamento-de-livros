const express = require ('express')
const deckRouter = require('./livro')
const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(deckRouter);

app.get('/', (req, res) => {
    res.send('Servidor esta funcionando')
})

app.listen(port,() => {
    console.log(`servidor ouvindo na porta ${port}`)
}) 
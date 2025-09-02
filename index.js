const express = require ('express')
const router = require('./livro')
const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(router);

app.get('/', (req, res) => {
    res.send('Servidor esta funcionando')
})

app.listen(port,() => {
    console.log(`servidor ouvindo na porta ${port}`)
}) 
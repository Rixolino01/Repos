import express from 'express'

const app = express() //cria uma instância do Express
const PORT = 3000 //cria a porta 3000 no servidor

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(PORT, ()=> {
    console.log(`Server rodando em http://localhost:${PORT}`)//inicia o servidor
})

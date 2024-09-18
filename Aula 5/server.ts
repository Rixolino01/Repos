import express, { Request, Response } from 'express'
import Pessoa from './Pessoa'

const app = express()
const PORT = 3000

app.use(express.json()) // configurar body no formato json

app.get('/pessoa',(req: Request, res: Response)=>{
    const pessoa1 = new Pessoa("Arlene", 54, "arlene.freitas@gmail.com")
    const pessoa2 = new Pessoa("Clayton", 38, "clayton.pereira@hotmail.com")
    
    res.json(pessoa2)
})

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
})

app.post('/pessoa',(req: Request, res: Response)=>{
    const nome = req.body.nome
    const idade = req.body.idade
    const email = req.body.email

    const pessoaN = new Pessoa(nome, Number(idade),email)
    res.json(pessoaN)
})
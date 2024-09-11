import express from 'express'
import Estudante from './estudante.js'

const app = express()
const port = 3000

app.get('/estudante',(req,res)=>{
    const estudante1 = new Estudante('Pedro','pedro.amaral@hotmail.com',232312124,'Marcenaria',['Madeiras','Ferramentas'])
    res.json(estudante1)

})

app.listen(port, ()=>{
    console.log(`App rodando em http://localhost:${port}`)
})
// src/server.ts | npm run dev
import express from 'express'
import routes from './routes'
import swaggerUi from 'swagger-ui-express'
import swaggerFile from './swagger.json'

const app = express()
const PORT = 3000

app.use(express.json())
app.use('/api',routes)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile)) // Configura o Swagger UI

app.listen(PORT,()=>{
    console.log(`Server rodando em http://localhost:${PORT}`)
})
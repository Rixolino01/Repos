import { Router } from 'express' // Importa o Router do Express
import { createUser, findAllUsers } from '../controllers/user.controller' // Importa os métodos do controlador

const router = Router() // Cria uma instância do Router

router.post('/', createUser) // Define a rota para criar um usuário
router.get('/', findAllUsers) // Define a rota para buscar todos os usuários
router.patch('/:id', updateUser) // Define a rota para atualizar um usuário
router.delete('/:id', deleteUser) // Define a rota para deletar um usuário

export default router // Exporta o router
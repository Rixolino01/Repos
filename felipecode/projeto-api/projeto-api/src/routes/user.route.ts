import { Router } from "express"
import { createUser, deleteUser, findAllUsers, updateUser } from "../controllers/user.controller"
import { validate } from "../middlewares/validate.middleware"
import { CreateUserDTO, UpdateUserDTO } from "../dtos/user.dto"

const router = Router()

router.post('/', validate(CreateUserDTO), createUser)
router.get('/',findAllUsers)
// router.get('/:id',findUserById)
router.patch('/:id', validate(UpdateUserDTO), updateUser)
router.delete('/:id',deleteUser)

export default router
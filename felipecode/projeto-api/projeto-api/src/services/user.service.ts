import { CreateUserDTO, UpdateUserDTO } from "../dtos/user.dto"
import { createUser, deleteUser, findAllUsers, findUserByEmail, findUserById, updateUser } from "../repositories/user.repository"

export const createUserService = async (data: CreateUserDTO) =>{
    const user = await findUserByEmail(data.email)

    if(user){
        throw new Error('Usuário já existe')
    }

    return createUser(data)
}

export const findAllUsersService = async () => {
    return findAllUsers()
}

export const updateUserService = async (id: number, data: UpdateUserDTO) => {
    const user = await findUserById(id)
    if (!user) throw new Error('Usuário não encontrado')

    return await updateUser(id, data)
}

export const deleteUserService = async (id: number) => {
    const user = await findUserById(id)
    if (!user) throw new Error('Usuário não encontrado')

    return await deleteUser(id)
}
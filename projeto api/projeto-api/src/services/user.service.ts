import { createUser, findAllUsers, findUserByEmail } from "../repositories/user.repository";

interface CreateUserDTO {
    name: string
    email: string
    password: string
}

export const createUserService = async (data:CreateUserDTO)=>{
    const user = await findUserByEmail(data.email)

    if (user){
        throw new Error('Usuário já existe')
    }

    return createUser(data)
}

export const findAllUsersService =async () => {
    return findAllUsers()
}
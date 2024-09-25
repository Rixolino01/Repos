import User from '../entities/user.entity'

interface CreateUserDTO {
    name: string
    email: string
    password: string
}
//Criando um novo usuário
export const createUser = async (data:CreateUserDTO) =>{
    return User.create({data})
}
//Buscando todos os usuários dentro do BD
export const findAllUsers =async () => {
    return User.findMany()
}

//Buscando usuários por e-mail
export const findUserByEmail =async (email:string) => {
    return User.findFirst({where: {email}})
}
import {Request, Response} from 'express'
import { createUserService, deleteUserService, findAllUsersService, updateUserService } from '../services/user.service'

export const createUser = async (req: Request, res: Response) => {
    try {
        const user = await createUserService(req.body)
        return res.status(201).json(user)
    } catch (error) {
        return res.status(400).json({error})
    }
}

export const findAllUsers = async (req: Request, res: Response) =>{
    const users = await findAllUsersService()
    return res.json(users)
}

export const updateUser = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id)
        const user = await updateUserService(id, req.body)
        return res.status(200).json(user)
    } catch (error) {
        return res.status(400).json({error})
    }
}

export const deleteUser = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id)
        const user = await deleteUserService(id)
        return res.status(200).json(user)
    } catch (error) {
        return res.status(400).json({error})
    }
}
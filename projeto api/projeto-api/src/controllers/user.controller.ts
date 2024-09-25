import { Request, Response } from "express"
import { createUserService, findAllUsersService } from "../services/user.service"

export const createUser = async (req: Request, res:Response)=>{
    try {
        const user = createUserService(req.body)
        return res.status(201).json(user)
    } catch (error) {
        return res.status(400).json({error})
    }
}

export const findAllUsers = async (req: Request, res: Response)=>{
    const users = await findAllUsersService()
    return res.json(users)
}
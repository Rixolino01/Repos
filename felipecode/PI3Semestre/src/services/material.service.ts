import { createMaterial, findAllMM, findMM } from "../repositories/material.repository";

export const createMaterialService = async (data: {MM: Int16Array, data: Date, obs: String, dept: String, user: String })=>
{
    //busca um MM especifico
    const material = await findMM(data.MM)

    if (material){
        throw new  Error('MM cadastrado')
    }
    return createMaterial(data)
}

export const findAllMM =async () => {
    return findAllMM()    
}

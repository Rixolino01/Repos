import Material from    '../entities/material.entities'

export const createMaterial = async (data: {MM: Int16Array, data: Date, obs: String, dept: String, user: String }) => 
{ 
        return Material.create({data})
}
//realiza a busca de todos os MM´s cadastrados
 export const findAllMM =async () => {
    return Material.findMany()
 }
 //realizar a busca por um MM especifico
 export const findMM =async (MM: Int16Array) => {
    return Material.findFirst({where: {MM}})
 }
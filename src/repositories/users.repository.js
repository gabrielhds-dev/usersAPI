
import prisma from "../database.js";

export async function usersFindManyRepository(){
    return await prisma.users.findMany()
}

export async function usersFindUniqueRepository(id){
    return await prisma.users.findUnique({
        where: {
            id: Number(id)
        }
    })
}

export async function usersCreateRepository(data){
    return await prisma.users.create({
        data
    })
}

export async function usersDeleteRepository(id){
    return await prisma.users.delete({
        where: {
            id: Number(id)
        }
    })
}

export async function usersUpdateRepository(id , data){
    return await prisma.users.update({
        where: {
            id: Number(id)
        },

        data
    })
}
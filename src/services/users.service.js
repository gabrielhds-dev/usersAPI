
import { usersCreateRepository, usersDeleteRepository, usersFindManyRepository, usersFindUniqueRepository, usersUpdateRepository } from "../repositories/users.repository.js";

export async function usersFindManyService(){
    return await usersFindManyRepository()
}

export async function usersFindUniqueService(id){
    return await usersFindUniqueRepository(id)
}

export async function usersCreateService(data){
    return await usersCreateRepository(data)
}

export async function usersDeleteService(id){
    return await usersDeleteRepository(id)
}

export async function usersUpdateService(id , data){
    return await usersUpdateRepository(id , data)
}
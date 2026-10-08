
import { usersFindManyService , usersCreateService, usersFindUniqueService, usersDeleteService, usersUpdateService} from "../services/users.service.js";

export async function usersFindManyController(req , res){

    const users_ = await usersFindManyService()

    res.status(200).json(users_)
}               

export async function usersFindUniqueController(req , res){
    
    const users_ = await usersFindUniqueService(req.params.id)

    res.status(200).json(users_)
}

export async function usersCreateController(req , res){

    const users_ = await usersCreateService(req.body)

    res.status(201).json(users_)
}

export async function usersDeleteController(req , res){

    const users_ = await usersDeleteService(req.params.id)

    res.status(204).json(users_)
}

export async function usersUpdateControllers(req , res){

    const users_ = await usersUpdateService(req.params.id , req.body)

    res.status(200).json(users_)
}
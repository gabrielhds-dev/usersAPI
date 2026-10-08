
import { usersCreateController, usersDeleteController, usersFindManyController, usersFindUniqueController, usersUpdateControllers } from "../controllers/users.controller.js";
import { Router } from "express";

const router = new Router()

router.get("/" , usersFindManyController)

router.get("/:id", usersFindUniqueController)

router.post("/" , usersCreateController)

router.delete("/:id" , usersDeleteController)

router.put("/:id" , usersUpdateControllers)


export default router
import {Router} from "express";
import { getAllUsers, getUsersById, userLogin, userRegister } from "../controllers/usersController";

const usersRouter: Router = Router();

//! Rutas

// GET /users => Obtener el listado de todos los usuarios.
usersRouter.get("/", getAllUsers);

// GET /users/:id => Obtener el detalle de un usuario específico.
usersRouter.get("/:id", getUsersById);

// POST /users/register => Registro de un nuevo usuario.
usersRouter.post("/register", userRegister);

// POST /users/login => Login del usuario a la aplicación.
usersRouter.post("/login", userLogin);

export default usersRouter;
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usersController_1 = require("../controllers/usersController");
const usersRouter = (0, express_1.Router)();
//! Rutas
// GET /users => Obtener el listado de todos los usuarios.
usersRouter.get("/", usersController_1.getAllUsers);
// GET /users/:id => Obtener el detalle de un usuario específico.
usersRouter.get("/:id", usersController_1.getUsersById);
// POST /users/register => Registro de un nuevo usuario.
usersRouter.post("/register", usersController_1.userRegister);
// POST /users/login => Login del usuario a la aplicación.
usersRouter.post("/login", usersController_1.userLogin);
exports.default = usersRouter;

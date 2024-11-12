"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userLogin = exports.userRegister = exports.getUsersById = exports.getAllUsers = void 0;
const UserService_1 = require("../services/UserService");
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield (0, UserService_1.getUsers)();
        res.status(200).json(users);
    }
    catch (error) {
        res.status(400).json(error.message);
    }
});
exports.getAllUsers = getAllUsers;
const getUsersById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const user = yield (0, UserService_1.getUserById)(Number(id));
        res.status(200).json(user);
    }
    catch (error) {
        res.status(400).json(error.message);
    }
});
exports.getUsersById = getUsersById;
const userRegister = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, username, password, birthdate, nDni } = req.body;
        const user = yield (0, UserService_1.createUser)({ name, email, username, password, birthdate, nDni });
        res.status(200).json(user);
    }
    catch (error) {
        res.status(400).json(error.message);
    }
});
exports.userRegister = userRegister;
const userLogin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).send("Esto permite identificar a un usuario");
});
exports.userLogin = userLogin;

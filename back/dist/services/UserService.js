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
exports.createUser = exports.getUserById = exports.getUsers = void 0;
const credentialsServices_1 = require("./credentialsServices");
const users = [];
let userId = 1;
// Implementar una función que pueda retornar el arreglo completo de usuarios.
const getUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const allUsers = users;
    return allUsers;
});
exports.getUsers = getUsers;
// Implementar una función que pueda retornar un elemento del arreglo que haya sido identificado por id.
const getUserById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const foundUser = users.find(user => user.id === id);
    if (!foundUser)
        throw Error("Usuario no existente");
    return foundUser;
});
exports.getUserById = getUserById;
// Implementar una función que pueda crear un nuevo usuario dentro del arreglo PERO ten en cuenta que al momento de crear el usuario, debe crear su correspondiente par de credenciales llamando a la función correspondiente del servicio de credenciales. 
// Al recibir de esta función el id de las credenciales, debe guardar el dato en la propiedad credentialsId.
const createUser = (createUserDTO) => __awaiter(void 0, void 0, void 0, function* () {
    const newCredential = yield (0, credentialsServices_1.createCredential)({
        username: createUserDTO.username,
        password: createUserDTO.password
    });
    const newUser = {
        id: userId++,
        name: createUserDTO.name,
        email: createUserDTO.email,
        birthdate: createUserDTO.email,
        nDni: createUserDTO.nDni,
        credentialsId: newCredential
    };
    users.push(newUser);
    return newUser;
});
exports.createUser = createUser;

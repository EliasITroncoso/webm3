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
exports.validateCredential = exports.createCredential = void 0;
const credentials = [];
let credentialId = 1;
// Implementar una función que reciba username y password y cree un nuevo par de credenciales con estos datos. 
// Debe retornar el ID del par de credenciales creado.
const createCredential = (credentialDTO) => __awaiter(void 0, void 0, void 0, function* () {
    const newCredential = {
        id: credentialId++,
        username: credentialDTO.username,
        password: credentialDTO.password
    };
    credentials.push(newCredential);
    return newCredential.id;
});
exports.createCredential = createCredential;
// Implementar una función que recibirá username y password, y deberá chequear si el nombre de usuario existe entre los datos disponibles y, si es así, si el password es correcto. 
// En caso de que la validación sea exitosa, deberá retornar el ID de las credenciales. 
const validateCredential = (validateCredentialDTO) => __awaiter(void 0, void 0, void 0, function* () {
    const foundCredential = credentials.find((credential) => credential.username === validateCredentialDTO.username);
    if (foundCredential && foundCredential.password != validateCredentialDTO.password) {
        throw Error("Password incorrecto");
    }
    else if (!foundCredential) {
        throw Error("Usuario no encontrado");
    }
    else {
        return foundCredential.id;
    }
});
exports.validateCredential = validateCredential;

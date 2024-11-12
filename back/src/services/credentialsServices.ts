import { credentialModel } from "../config/data-source";
import ICredentialDTO from "../dtos/ICredentialDto";
import { Credential } from "../entities/Credential";
//import ICredencial from "../interfaces/ICredencial";

// const credentials: ICredencial[] = [];
// let credentialId: number = 1;

// Implementar una función que reciba username y password y cree un nuevo par de credenciales con estos datos. 
// Debe retornar el ID del par de credenciales creado.

export const createCredential = async (credentialDTO: ICredentialDTO): Promise<Credential>  => {
    const newCredential: Credential = await credentialModel.create(credentialDTO)
    await credentialModel.save(newCredential)

    // const newCredential = {
    //     id: credentialId++,
    //     username: credentialDTO.username,
    //     password: credentialDTO.password
    // };
    //credentials.push(newCredential);
    return newCredential;
};


// Implementar una función que recibirá username y password, y deberá chequear si el nombre de usuario existe entre los datos disponibles y, si es así, si el password es correcto. 
// En caso de que la validación sea exitosa, deberá retornar el ID de las credenciales. 

export const validateCredential = async (validateCredentialDTO: ICredentialDTO) => {
    // const foundCredential = credentials.find(
    //     (credential) => credential.username === validateCredentialDTO.username
    // );

    const foundCredential: Credential | null  = await credentialModel.findOneBy({username: validateCredentialDTO.username})

    if (foundCredential && foundCredential.password != validateCredentialDTO.password) {
        throw Error("Password incorrecto")
    } else if (!foundCredential) {
        throw Error("Usuario no encontrado") 
    } else {
        return foundCredential
    }
};
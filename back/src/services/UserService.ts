import { userModel } from "../config/data-source";
import IUserDto from "../dtos/IUserDto";
import { Credential } from "../entities/Credential";
import { User } from "../entities/User";
//import IUser from "../interfaces/IUser";
import { createCredential } from "./credentialsServices";


// const users: IUser[] = [];
// let userId: number = 1

//! Implementar una función que pueda retornar el arreglo completo de usuarios.
// export const getUsers = async (): Promise<IUser[]> => {
//     const allUsers = users;
//     return allUsers;
// };

export const getUsers = async (): Promise<User[]> => {
    const allUsers: User[] = await userModel.find()
    return allUsers;
};

//! Implementar una función que pueda retornar un elemento del arreglo que haya sido identificado por id.
// export const getUserById = async (id: number): Promise<IUser>  => {
//     const foundUser: IUser | undefined = users.find(user => user.id === id)

//     if(!foundUser) throw Error("Usuario no existente");

//     return foundUser;
// }
export const getUserById = async (id: number): Promise<User>  => {
    const foundUser: User | null = await userModel.findOne({where: {id}, relations: ["appointments"]})
    if(!foundUser) throw Error("Usuario no existente");
    return foundUser;
}


//! Implementar una función que pueda crear un nuevo usuario dentro del arreglo PERO ten en cuenta que al momento de crear el usuario, debe crear su correspondiente par de credenciales llamando a la función correspondiente del servicio de credenciales. 
//! Al recibir de esta función el id de las credenciales, debe guardar el dato en la propiedad credentialsId.
// export const createUser = async (createUserDTO: IUserDto) => {
//     const newCredential = await createCredential({
//         username: createUserDTO.username,
//         password: createUserDTO.password
//     });

//     const newUser = {
//         id: userId++,
//         name: createUserDTO.name,
//         email: createUserDTO.email,
//         birthdate: createUserDTO.email,
//         nDni: createUserDTO.nDni,
//         credentialsId: newCredential
//     }

//     users.push(newUser);
//     return newUser;
// }
export const createUser = async (createUserDTO: IUserDto) => {
    const newUser: User = await userModel.create(createUserDTO)
    const newCredential: Credential = await createCredential({
        username: createUserDTO.username,
        password: createUserDTO.password
    });

    newUser.credential = newCredential;
    await userModel.save(newUser)
    return newUser
}

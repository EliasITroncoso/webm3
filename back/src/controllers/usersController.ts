import { Request, Response } from "express";
import { createUser, getUserById, getUsers } from "../services/UserService";
import { validateCredential } from "../services/credentialsServices";
import { userModel } from "../config/data-source";
import { User } from "../entities/User";

export const getAllUsers = async (req: Request, res: Response) => {
    try {
    const users: User[] = await getUsers();
        res.status(200).json(users);
    } catch (error: any) {
        res.status(400).json(error.message)
    }
}

export const getUsersById = async (req: Request, res: Response) => {
    try {
        const {id} = req.params;
        const user: User = await getUserById(Number(id));
            res.status(200).json(user);
        } catch (error: any) {
            res.status(400).json(error.message)
        }
}

export const userRegister = async (req: Request, res: Response) => {
    try {
        const {name, email, username, password, birthdate, nDni} = req.body
        const user: User = await createUser({name, email, username, password, birthdate, nDni});
            res.status(200).json(user);
        } catch (error: any) {
            res.status(400).json(error.message)
        }
}

export const userLogin = async (req: Request, res: Response) => {
    try {
        const {username, password} = req.body;
        const credential = await validateCredential({username, password})
    
        const user = await userModel.findOneBy({ credential: { id: credential.id } });
        
        res.status(200).json({user, login: true})
        } catch (error: any) {
            res.status(400).json(error.message)
        }
}
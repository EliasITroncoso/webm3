import { DataSource } from "typeorm";
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USERNAME } from "./envs";
import { User } from "../entities/User";
import { Appointment } from "../entities/Appointment";
import { Credential } from "../entities/Credential";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: DB_HOST,
    port: DB_PORT,
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    synchronize: true,
    logging: false,
    dropSchema: false,
    entities: [User, Appointment, Credential],
    subscribers: [],
    migrations: [],
})

export const userModel = AppDataSource.getRepository(User)
export const credentialModel = AppDataSource.getRepository(Credential)
export const appointmentModel = AppDataSource.getRepository(Appointment)

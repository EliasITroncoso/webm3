import { AppDataSource } from "./config/data-source";
import { PORT } from "./config/envs";
import server from "./server";
import "reflect-metadata";

AppDataSource.initialize()
    .then(()=>{
        console.log("Database connected")
        server.listen(PORT, ()=>{
            console.log(`Servidor escuchando en el puerto ${PORT}`)
        })
    })
    .catch((error) => console.log(error))


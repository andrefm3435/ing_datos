import { dotenv } from "dotenv";
dotenv.config()
import express, {json} from "express";
import { path } from "path";
import {_dirname} from "./util/_dirname.js"
import { connectDatabase } from "./config/database.js";

connectDatabase()
.then(()=>{
    console.log("conexion a base de datos exitosa")
})
.catch((error)=>{
    console.log("ocurrió un error al conectar a la base de datos", error)
    process.exit(1)
})

const server=express()
const PORT=process.env.PORT
server.use(express.urlencoded({extended: true}))
server.use(json);
server.listen(PORT,()=>console.log('servidor corriendo en puerto ${PORT}'))
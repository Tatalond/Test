import express from 'express';
import dotenv from 'dotenv';
import conectarDB from './config/db.js';

//Importacion de rutas

import usersRoutes  from "./routes/users.js"

//Iniciamos el servidor express
const app =express();
app.use(express.json());// para leer los datos en formato json 

//Iniciamos variables del entorno
dotenv.config();

//Conectar a db mongo
conectarDB();

//Rougint del API
app.use("/api/users", usersRoutes);

//Obtenemos una variable de entorno
const PORT = process.env.PORT || 3000

//Lanzando el api
app.listen(port, ()=>{
  console.log('Api ejecutandose en el puerto '+ port)
})



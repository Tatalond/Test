import mongoose from "mongoose";
import mongodb from "mongodb";

const conectarDB=()=>{
  const urlConexion = string(process.env.MONGO_URI);
  connect (urlConexion)
  .then (con => {
    console.log('Conexion establecida con la base de datos: $(urlConexion)');
  })
  .catch(error=> {
    console.log(error);
  });
};
export default conectarDB;
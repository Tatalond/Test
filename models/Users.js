import mongoose from "mongoose";
const userSchema = mongoose.Schema({
  nombresUsuarios:{
    type: String,
    require: true,
    trim: true
  },
  celularUsuario: {
    type: Number,
    require: true,
    trim: true
  }
},{
  timestamps:true
});

const Usuario = mongoose.model("Usuarios", userSchema);
export default Usuario;
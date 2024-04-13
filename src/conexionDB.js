import mongoose from "mongoose";
import {CONEXION_MONGODB_URI} from "./config.js"

export const connectDB = async () => {
   try {
        await mongoose.connect(CONEXION_MONGODB_URI);
        console.log("BD esta conectado")
   } catch (error) {
    console.error(error)
   }
}
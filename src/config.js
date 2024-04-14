import dotenv from "dotenv";

dotenv.config();

export const CONEXION_MONGODB_URI = process.env.MONGODB_URI;
export const PORT = process.env.PORT || 3000;

export const TOKEN_SECRET = process.env.TOKEN_SECRET;
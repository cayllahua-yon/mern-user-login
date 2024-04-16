import jwt from "jsonwebtoken";
import {TOKEN_SECRET} from "../config.js"
 
 export const authRequired = (req , res, next) => {
    // console.log("validando token para acceder al perfil");
    // console.log(req.headers)
    const {token} = req.cookies;
    if(!token) return res.status(401).json({message: "No token, autentificación denegada"});

    //decoded = user
    jwt.verify(token, TOKEN_SECRET, (err, user) =>{
            if(err) return res.status(401).json({message: "token invalido"});
            req.user = user; // almacenamos valor de decodificado
            next();
        }
    )

 }
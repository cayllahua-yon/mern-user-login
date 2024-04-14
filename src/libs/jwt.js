import jwt from "jsonwebtoken";
import {TOKEN_SECRET} from "../config.js"

export function createAccessToken(payload) {
    return new Promise((resolve, reject) => {
        jwt.sign(
            payload,
            TOKEN_SECRET, 
            { expiresIn: "1d"},
            (err, token) => {
                if (err) reject(err);
                 resolve(token);              
            }
        );
    })
}




// jwt.sign(
        //     {id: userSaved._id},
        //     "protegido963", 
        //     { expiresIn: "1d"},
        //     (err, token) => {
        //         if (err) console.log(err)
        //         // res.json({token});
        //         res.cookie('token', token)
        //         res.json({message: "Usuario creada con éxito"})
        //     }
        // );
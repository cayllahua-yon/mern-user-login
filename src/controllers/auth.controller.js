import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";
import {createAccessToken} from "../libs/jwt.js"
import jwt from "jsonwebtoken";
import {TOKEN_SECRET} from "../config.js"

export const register = async (req, res) => {
    const {username, email, password } = req.body;

    try {
        const userFound = await User.findOne({email}); // si existe un usuario con el correo igual enviamos un 400
        // if (userFound) return res.status(400).json({message: "El correo ya existe"}) // validando formato de zod
        if (userFound) return res.status(400).json({message: ["El correo ya esta en uso"]}); // sino mandamos el array directo

        const passwordHash = await bcrypt.hash(password, 10);

        const newUser =  new User({ 
            username, 
            email, 
            password: passwordHash 
        });
        const userSaved = await newUser.save();
        
        const token = await createAccessToken({id: userSaved._id});
        res.cookie('token', token);

        //jwt.sign({id: userSaved._id}, key: process.env.SECRET_KEY, { expiresIn: 86400}, (err, token) => {})

        res.json({
            id: userSaved._id,
            username: userSaved.username,
            email: userSaved.email,
            createdAt: userSaved.createdAt,
            updatedAt: userSaved.updatedAt
         });       
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

export const login = async (req, res) => {
    const { email, password } = req.body;
    
    try {
        // validad email y password para que no llegue undefined o vacio null..

        const userFound = await User.findOne({email});
        
        if(!userFound) return res.status(400).json({message: "Usuario no encontrado"});

        const isMatch = await bcrypt.compare(password, userFound.password); // true o false
        if (!isMatch) return res.status(400).json({message: "Contraseña incorrecta"});
        
        const token = await createAccessToken({id: userFound._id}); // creamos nuevo token?
        res.cookie('token', token);
        // res.cookie('token', token, {sameSite: 'none', secure: 'true', httpOnly: true}); // porlo que no estamos en la misma ruta 
        
        res.json({
            id: userFound._id,
            username: userFound.username,
            email: userFound.email,
            createdAt: userFound.createdAt,
            updatedAt: userFound.updatedAt
         });     

    } catch (error) {
        console.error(error)
        res.status(500).json({message: error.message});
     }       
}

export const logout = (req, res) => {
    res.cookie('token', "", { expires: new Date(0)});
    return res.sendStatus(200);
}

export const profile = async (req, res) => {
    // console.log(req.user)
    const userFound = await User.findById(req.user.id);  // usamos el dato optenido decodificado
    if(!userFound) return res.status(400).json({message: ["Usuario no encontrado"]});
    
    return res.json({
        id: userFound._id,
        username: userFound.username,
        email: userFound.email,
        createdAt: userFound.createdAt,
        updatedAt: userFound.updatedAt
    })
    // res.send("Perfil")
}

// el usuario trajo su token lo pasamos por jwt / cada ves que la pagina carga por primera vez
export const verifyToken =  async (req, res) => {
    const {token} = req.cookies;  // las cookies del navegador
    if(!token) return res.status(401).json({message: "No autorizado"});

    jwt.verify(token, TOKEN_SECRET, async (err, user) => {
        if(err) return res.status(401).json({message: "No autorizado"});

        const userFound = await User.findById(user.id);
        if (!userFound) return res.status(401).json({message: "No autorizado"}) 
        
        return res.json({
            id: userFound._id,
            username: userFound.username,
            email: userFound.email,
        });
    })
}
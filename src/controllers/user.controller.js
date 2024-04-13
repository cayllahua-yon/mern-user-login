import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { token } from "morgan";

export const register = async (req, res) => {
    const {username, email, password } = req.body;

    try {
        const passwordHash = await bcrypt.hash(password, 10);

        const newUser =  new User({ 
            username, 
            email, 
            password: passwordHash 
        });
        const userSaved = await newUser.save();

        jwt.sign({id: userSaved._id}, "secret123", { expiresIn: "1d"}, (err, token) => {
            if (err) console.log(err)
            // res.json({token});
            res.cookie('token', token)
            res.json({message: "Usuario creada con éxito"})
        })

        //jwt.sign({id: userSaved._id}, key: process.env.SECRET_KEY, { expiresIn: 86400}, (err, token) => {})

        // res.json({
        //     id: userSaved._id,
        //     username: userSaved.username,
        //     email: userSaved.email,
        //     createdAt: userSaved.createdAt,
        //     updatedAt: userSaved.updatedAt
        //  });       
    } catch (error) {
        console.log(error)
    }

   
}

export const login = (req, res) => { return res.send('login')}
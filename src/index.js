// import express from "express";
import app from "./app.js";
import {connectDB} from "./conexionDB.js"
import {PORT} from "./config.js"
//Setting
connectDB()


//Middlewares
//Routes

//Static files

//starting the server
app.listen(PORT);
console.log("Servidor inicializado en el puerto", PORT);
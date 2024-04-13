import express from "express";
import morgan from "morgan";
import userRoutes from "./routes/user.routes.js";


//Setting
const app = express();

//Middlewares
app.use(morgan("dev"))
app.use(express.json())
//Routes
app.use('/api', userRoutes);

//Static files
//starting the server

export default app;
import express from "express";
import morgan from "morgan";
import authRoutes from "./routes/auth.routes.js";
import jobRoutes from "./routes/jobs.routes.js"
import cookieParser  from "cookie-parser"

//Setting
const app = express();

//Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

//Routes
app.use('/api', authRoutes);
app.use('/api', jobRoutes);

//Static files
//starting the server

export default app;
import express from "express";
import morgan from "morgan";
import authRoutes from "./routes/auth.routes.js";
import jobRoutes from "./routes/jobs.routes.js"
import cookieParser  from "cookie-parser"
import cors from "cors";

//Setting
const app = express();

//Middlewares
app.use(cors({origin: 'http://localhost:5173', credentials: true }));
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

//Routes
app.use('/api', authRoutes);
app.use('/api', jobRoutes);

//Static files
//starting the server

export default app;
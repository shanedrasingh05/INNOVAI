
import express from 'express';
import morgan from 'morgan';
import connect from './db/db.js';
import dotenv from "dotenv";
dotenv.config();

import userRoutes from "./routes/user.route.js"


connect();
const app = express();





app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true})); 

app.use('/users', userRoutes);







app.get("/", (req, res) => {
    res.send("Server is working!");
});


export default app;
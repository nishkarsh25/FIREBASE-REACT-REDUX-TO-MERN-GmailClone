// const express = require('express')// method-1
import express from "express"; // method-2
import dotenv from "dotenv"; 
import connectDB from "./config/database.js";
import userRoute from "./routes/userRoute.js";
import emailRoute from "./routes/emailRoute.js";
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config({});

 
const PORT = process.env.PORT || 5000;
const app = express();

// middleware
app.use(express.urlencoded({extended:true}));
app.use(express.json()); 
app.use(cookieParser());
const corsOption={
    origin:'http://localhost:5173',
    credentials:true
};
app.use(cors(corsOption)); 


// routes
app.use("/api/v1/user",userRoute); 
app.use("/api/v1/email",emailRoute);
 




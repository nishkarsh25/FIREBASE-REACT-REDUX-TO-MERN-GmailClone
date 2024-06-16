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









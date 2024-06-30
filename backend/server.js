import express from "express";
import dataRouter from "./routes/data-routes.js";
import mongoose from "mongoose";

const app = express()
const PORT = 8080

app.use(express.json());

app.use('/api/data', dataRouter)

mongoose.connect("mongodb://localhost:27017/").then(() => app.listen(PORT)).then(() => console.log("Connected successfully on PORT: 8080"))
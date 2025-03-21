import express, { Request, Response } from "express";
import { connectDB } from "./config/database.config";

require("dotenv").config();

const cors = require("cors");
const app = express();

connectDB();

// Middlewares
app.use(
  cors({
    origin: process.env.ORIGIN,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  })
);

app.use(express.json()); // make req.body available
app.use(express.urlencoded({ extended: true }));

// Routes
app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the API Server");
});

export default app;

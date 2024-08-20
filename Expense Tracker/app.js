import authRouter from "./routes/user.routes.js"

import dotenv from "dotenv";

dotenv.config();

import express from "express";
import mongoose from "mongoose";

const server = express();

server.use(express.json());

server.use("/auth", authRouter)

server.listen(process.env.PORT, () => {
  console.log(`Server is listening on port ${process.env.PORT}`);
});

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {})
  .catch((err) => console.log(err));

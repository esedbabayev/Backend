import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import AuthRouter from "./routes/auth.routes.js";



const server = express();

dotenv.config();

// Middleware
server.use("/users", AuthRouter);

server.listen(process.env.PORT, () => {
  console.log(`Server is listening on PORT: ${process.env.PORT}`);
});

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Database connection established");
  })
  .catch((err) => console.log(err));

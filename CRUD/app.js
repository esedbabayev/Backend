import express from "express";
import mongoose from "mongoose";

import UserRouter from "./routes/user.routes.js";

import { PORT, MONGODB_URL } from "./config.js";
import { log } from "console";

const server = express();

server.use(express.json());

server.use("/users", UserRouter);

server.listen(PORT, () => {
  log(`Server listening on ${PORT}`);
});

mongoose
  .connect(MONGODB_URL, () => {
    log("Database connection established");
  })
  .then(() => {})
  .catch((err) => log(err));

import express from "express";

import {
  getUsers,
  createUser,
  deleteUser,
  editUser,
} from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", getUsers);

router.post("/", createUser);

router.delete("/:userId", deleteUser);

router.patch("/:userId", editUser);

export default router;

import express from "express";

import { User } from "../models/user.controller.js";

import { getUsers } from "../controllers/auth.controller.js";

import { protectRoute } from "../middleware/protectRoute.js";

const router = express.Router();

router.use(protectRoute);

router.get("/", getUsers);

export default router;

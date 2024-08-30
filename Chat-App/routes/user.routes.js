import express from "express";

// Controllers
import { getAllUsers } from "../controllers/user.controller.js";

import { protectRoute } from "../middleware/protectRoute.js";

const router = express.Router();

router.get("/", protectRoute, getAllUsers);

export default router;

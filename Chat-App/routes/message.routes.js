import express from "express";

// Controllers
import { sendMessage, getMessages } from "../controllers/message.controller.js";

import { protectRoute } from "../middleware/protectRoute.js";

const router = express.Router();

router.use(protectRoute);

router.post("/:talkingToId", sendMessage);
router.get("/:talkingToId", getMessages);

export default router;

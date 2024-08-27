import express from "express";

// Controllers
import { sendMessage, getMessages } from "../controllers/message.controller.js";

const router = express.Router();

router.post("/:talkingToId", sendMessage);
router.get("/:talkingToId", getMessages);

export default router;

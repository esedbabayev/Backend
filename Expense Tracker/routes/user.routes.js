import express from "express";

import { signUp, signIn, logOut } from "../controllers/auth.controller.js";

const router = express.Router();

// Sign Up
router.post("/sign-up", signUp);

// Sign In
router.post("/sign-in", signIn);

// Log Out
router.post("/log-out", logOut);

export default router;

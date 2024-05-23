import express from "express";

import { signIn, userRegister,  } from "../controllers/user.js";

const router = express.Router();

router.post("/register", userRegister);
router.post("/signIn", signIn);

export default router;
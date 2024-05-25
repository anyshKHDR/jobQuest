import express from "express";

import { signIn, userFeedData, userRegister,  } from "../controllers/user.js";

const router = express.Router();

router.post("/register", userRegister);
router.post("/signIn", signIn);
router.get("/feed/:id", userFeedData);

export default router;
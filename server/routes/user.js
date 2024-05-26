import express from "express";

import { signIn, userFeedData, userJobApply, userRegister,  } from "../controllers/user.js";

const router = express.Router();

router.post("/register", userRegister);
router.post("/signIn", signIn);
router.get("/feed/:id", userFeedData);
router.post("/jobApply", userJobApply);

export default router;
import express from "express";

import { userRegister } from "../controllers/user.js";

const router = express.Router();

router.post("/register", userRegister);

export default router;
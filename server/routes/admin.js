import express from "express";

import { newJobCategory } from "../controllers/admin.js";

const router = express.Router();

router.post("/newJobCategory", newJobCategory)

export default router;
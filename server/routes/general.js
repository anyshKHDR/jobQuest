import express from "express";

import { getJobCategory } from "../controllers/general.js";

const router = express.Router();

router.get("/getJobCategory", getJobCategory);

export default router;
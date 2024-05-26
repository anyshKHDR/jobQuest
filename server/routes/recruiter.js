import express from "express";

import { postRecruiterRegister,getLoginData, newPost, getPostList, getBusinessDetail, deletePost, getSelectedPost, getApplications} from "../controllers/recruiter.js";

const router = express.Router();

router.post("/register", postRecruiterRegister);
router.post("/login", getLoginData);
router.post("/newPost", newPost);
router.get("/postList", getPostList);
router.get("/getBusinessDetail", getBusinessDetail);
router.delete("/deletePost/:postId/:businessId", deletePost);
router.get("/getSelectedPost/:postId", getSelectedPost);
router.post("/getApplications", getApplications);

export default router;
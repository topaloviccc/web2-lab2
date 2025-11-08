import { Router } from "express";
import {
	addNewComment,
	clearComments,
} from "../controllers/comments.controller";
const router = Router();

router.post("/add-comment", addNewComment);
router.post("/clear-comments", clearComments);

export default router;

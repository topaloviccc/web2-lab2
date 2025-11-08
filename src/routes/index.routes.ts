import { Router } from "express";
import { listCommentsAndUsers } from "../controllers/index.controller";
const router = Router();

router.get("/", listCommentsAndUsers);

export default router;

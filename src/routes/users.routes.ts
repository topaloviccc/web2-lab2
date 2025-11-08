import { Router } from "express";
import { addNewUser } from "../controllers/users.controller";
const router = Router();

router.post("/add-user", addNewUser);

export default router;

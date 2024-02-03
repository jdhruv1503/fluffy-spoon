import express from "express";
import {
  test,
  getUser,
  updateUser,
  deleteUser,
} from "../controllers/user.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.get("/", test);
router.get("/get/:id", getUser);
router.post("/update/:id", updateUser);
router.delete("/delete/:id", verifyToken, deleteUser);

export default router;

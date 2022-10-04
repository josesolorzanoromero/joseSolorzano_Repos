import { getItem, createFile } from "../controllers/tribe";
import express from "express";
const router = express.Router();

router.get("/:id", getItem);
router.get("/createfile/:id", createFile);

export = router;

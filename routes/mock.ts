import { getItems, getItem } from "../controllers/mock";
import express from "express";
const router = express.Router();

router.get("/", getItems);
router.get("/:id", getItem);

export = router;

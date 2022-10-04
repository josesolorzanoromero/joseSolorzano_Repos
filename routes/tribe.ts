import { getItem } from "../controllers/tribe";
import express from "express";
const router = express.Router();

router.get("/:id", getItem);

export = router;

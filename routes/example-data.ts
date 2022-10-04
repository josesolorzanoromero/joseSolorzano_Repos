import { createItem } from "../controllers/example-data";
import express from "express";
const router = express.Router();

router.post("/", createItem);

export = router;

import { getItems } from "../controllers/mock";
import express from "express";
const router = express.Router();

router.get("/", getItems);

export = router;

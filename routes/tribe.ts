import { deleteItem } from "../controllers/tribe";
import express from "express";
const router = express.Router();

router.delete("/:id", deleteItem);

export = router;

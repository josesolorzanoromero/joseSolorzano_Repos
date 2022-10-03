import {
  validatorCreateItem,
  validatorGetItem,
} from "../validators/organization";
import {
  createItem,
  updateItem,
  getItem,
  getItems,
  deleteItem,
} from "../controllers/organization";
import express from "express";
const router = express.Router();

router.get("/", getItems);
router.get("/:id", validatorGetItem, getItem);
router.post("/", validatorCreateItem, createItem);
router.put("/:id", validatorCreateItem, updateItem);
router.delete("/:id", validatorGetItem, deleteItem);

export = router;

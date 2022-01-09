import express from "express";
import { getInventory, addInventory } from "../controllers/inventory.js";

const router = express.Router();

router.get("/", getInventory);
router.post("/", addInventory);

export default router;

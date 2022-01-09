import express from "express";
import { homeRoute, updateRoute } from "../controllers/render.js";
import {
  addInventory,
  getInventory,
  updateInventory,
  deleteInventory,
} from "../controllers/operations.js";

const router = express.Router();

// views
router.get("/", homeRoute);
router.get("/update", updateRoute);

// api
router.post("/api/inventory", addInventory);
router.get("/api/inventory", getInventory);
router.put("/api/inventory:id", updateInventory);
router.delete("/api/inventory:id", deleteInventory);

export default router;

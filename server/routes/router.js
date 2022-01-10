import express from "express";
import { homeRoute, updateRoute } from "../controllers/render.js";
import {
  addInventory,
  getInventory,
  updateInventory,
  deleteInventory,
} from "../controllers/operations.js";
import { validateBody } from "../middleware/middleware.js";

const router = express.Router();

// views
router.get("/", homeRoute);
router.get("/update/:id/", updateRoute);

// api
router.post("/api/inventory", validateBody, addInventory);
router.get("/api/inventory", getInventory);
router.put("/api/inventory/:id", validateBody, updateInventory);
router.delete("/api/inventory/:id", deleteInventory);

export default router;

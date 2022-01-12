import { Parser } from "json2csv";
import * as fs from "fs";
import InventoryItem from "../models/inventoryItem.js";

// create
export const addInventory = async (req, res) => {
  const item = req.body;
  const newItem = new InventoryItem(item);

  try {
    await newItem.save();
    res.status(201).json(newItem);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

// read all
export const getInventory = async (req, res) => {
  try {
    const inventoryItems = await InventoryItem.find();
    res.status(200).json(inventoryItems);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// update
export const updateInventory = async (req, res) => {
  const { id: _id } = req.params;
  const item = req.body;

  try {
    const updatedItem = await InventoryItem.findByIdAndUpdate(
      _id,
      { ...item, _id },
      { new: true }
    );
    res.status(200).json(updatedItem);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// delete
export const deleteInventory = async (req, res) => {
  const { id } = req.params;

  try {
    await InventoryItem.findByIdAndRemove(id);
    res.status(204).json(`Successfully deleted ${id}`);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// read single
export const getSingleInventory = async (req, res) => {
  const { id } = req.params;

  try {
    const inventoryItems = await InventoryItem.findById(id);
    res.status(200).json(inventoryItems);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// download
export const downloadInventory = async (req, res) => {
  try {
    const inventoryItems = await InventoryItem.find();
    const fields = Object.keys(InventoryItem.schema.paths);
    const json2csvParser = new Parser({ fields });
    const csv = json2csvParser.parse(inventoryItems);
    fs.writeFile("inventory.csv", csv, (error) => {
      if (error) throw error;
      console.log("Write to inventory.csv successfully!");
    });
    res.set({
      "Content-Disposition": "attachment; filename=inventory.csv",
      "Content-Type": "text/csv",
    });
    res.status(200).send(csv);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

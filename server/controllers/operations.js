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

// read
export const getInventory = async (req, res) => {
  try {
    const inventoryItems = await InventoryItem.find();
    res.status(200).json(inventoryItems);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// update
export const updateInventory = async (req, res) => {};

// delete
export const deleteInventory = async (req, res) => {};

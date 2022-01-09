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

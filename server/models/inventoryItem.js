import mongoose from "mongoose";

const inventorySchema = mongoose.Schema({
  itemId: {
    type: Number,
    required: true,
  },
  warehouse: {
    type: String,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  dateAdded: {
    type: Date,
    default: new Date(),
  },
  description: String,
});

const InventoryItem = mongoose.model("InventoryItem", inventorySchema);

export default InventoryItem;

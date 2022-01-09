import mongoose from "mongoose";

const inventorySchema = mongoose.Schema({
  id: {
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
  date: {
    type: Date,
    default: new Date(),
  },
  description: String,
});

const InventoryItem = mongoose.model("InventoryItem", inventorySchema);

export default InventoryItem;

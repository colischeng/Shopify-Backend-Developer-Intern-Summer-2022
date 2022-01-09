import mongoose from "mongoose";

const inventorySchema = mongoose.Schema({
  id: Number,
  warehouse: String,
  weight: Number,
  category: String,
  description: String,
  date: {
    type: Date,
    default: new Date(),
  },
});

const InventoryItem = mongoose.model("InventoryItem", inventorySchema);

export default InventoryItem;

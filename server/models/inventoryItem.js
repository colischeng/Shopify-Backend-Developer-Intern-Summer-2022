import mongoose from "mongoose";

const inventorySchema = mongoose.Schema({
  id: {
    type: Number,
    require: true,
  },
  warehouse: {
    type: String,
    require: true,
  },
  weight: {
    type: Number,
    require: true,
  },
  category: {
    type: String,
    require: true,
  },
  date: {
    type: Date,
    default: new Date(),
  },
  description: String,
});

const InventoryItem = mongoose.model("InventoryItem", inventorySchema);

export default InventoryItem;

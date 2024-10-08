const mongoose = require("mongoose");

const itemSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
      // default: "https://via.placeholder.com/150"
    },
  },
  { timestamp: true }
);

const items = mongoose.model("items", itemSchema);

module.exports = items;

const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    description: {
      type: String,
    },
    sku: {
      type: String,
    },
    brand: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Brand",
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },  
    criticalLimit: {
      type: String,
      default: 5,
    },
    image: {
      type: String,
    },
    type: {
      type: String,
      enum: ["Standard", "Variant"]
    },
    productUnit: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Unit",
    },
    saleUnit: {
      type: String
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;

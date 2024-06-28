const mongoose = require("mongoose");

const productPricesSchema = new mongoose.Schema(
  {
    unit: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Unit"
    },
    variant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Variant" 
    },
    itemPrice: {
      type: String,
    },
    salePrice: {
      type: String,
    },
    product:  {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product"
    },
  },
  {
    timestamps: true,
  }
);

const ProductPrice = mongoose.model("ProductPrice", productPricesSchema);

module.exports = ProductPrice;

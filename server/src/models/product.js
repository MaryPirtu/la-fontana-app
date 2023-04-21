import mongoose from "mongoose";
// schema definiste structura documentului
const productSchema = new mongoose.Schema({
  title: String,
  products: [
    {
      src: String,
      alt: String,
      title: String,
      price: Number,
      img: String,
      description: String,
    },
  ],
});

const Product = mongoose.model("Product", productSchema);

export default Product;

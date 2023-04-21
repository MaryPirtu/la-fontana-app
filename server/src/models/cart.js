import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
  productCount: Number,
  productData: {
    src: String,
    alt: String,
    title: String,
    price: Number,
    img: String,
    description: String,
  },
});

const Cart = mongoose.model("Cart", cartSchema);

export default Cart;

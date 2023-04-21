import Cart from "../models/cart.js";
// fiecare serviciu stie a lucra cu o anumita colectie
export default class CartService {
  async addToCart(item) {
    try {
      const cartItem = await Cart.findOneAndUpdate(
        {
          "productData.title": item.title,
        },
        {
          $inc: { productCount: 1 },
        }
      );
      if (!cartItem) {
        const productToAdd = {
          productCount: 1,
          productData: {
            ...item,
          },
        };

        const newCartItem = new Cart(productToAdd);

        newCartItem
          .save()
          .then(() => console.log("ok"))
          .catch((error) => console.log(error));
        return newCartItem;
      }
      return cartItem;
    } catch (error) {
      console.log(error);
      throw new Error(`Error adding cart: ${error.message}`);
    }
  }

  async getAllCart() {
    try {
      const cart = await Cart.find({});
      return cart;
    } catch (error) {
      throw new Error(`Error get cart: ${error.message}`);
    }
  }

  async deleteFromCart(item) {
    try {
      const cart = await Cart.findOneAndDelete({
        "productData.title": item.title,
      });
      return await this.getAllCart();
    } catch (error) {
      throw new Error(`Error delete cart: ${error.message}`);
    }
  }
}

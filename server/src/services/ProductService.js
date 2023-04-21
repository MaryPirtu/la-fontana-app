import Product from "../models/product.js";

export default class ProductService {
  async getAllProducts() {
    try {
      const products = await Product.find({});
      return products;
    } catch (error) {
      throw new Error(`Error get Product: ${error.message}`);
    }
  }
}

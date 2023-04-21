import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import initDb from "./database.js";
import CartService from "./services/cartService.js";
import cors from "cors";
import ProductService from "./services/productService.js";

dotenv.config();
const app = express();
app.use(bodyParser.json());
const port = process.env.PORT || 3003;
initDb();

const corsOptions = {
  origin: "http://localhost:3000",
};
app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/api/cart", async (req, res) => {
  const cart = new CartService();
  const saveItem = await cart.addToCart(req.body);
  res
    .header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    )
    .send(saveItem);
});

app.get("/api/cart", async (req, res) => {
  const productsCart = new CartService();
  const cart = await productsCart.getAllCart();
  res
    .header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    )
    .send(cart);
});

app.delete("/api/cart", async (req, res) => {
  const productsCart = new CartService();
  const cart = await productsCart.deleteFromCart(req.body);
  res
    .header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    )
    .send(cart);
});

app.get("/api/products", async (req, res) => {
  const productService = new ProductService();
  const products = await productService.getAllProducts();
  res
    .header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    )
    .send(products);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

import mongoose from "mongoose";
import { createProductsTable } from "./baseColections.js";

export default async function initDb() {
  mongoose
    .connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(async () => {
      console.log("Successfully connect to MongoDB.");
      await createProductsTable();
    })
    .catch((err) => {
      console.error("Connection error", err);
      process.exit();
    });
}

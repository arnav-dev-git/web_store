import express from "express";
import dotenv from "dotenv";
import products from "./data/products.js";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5001;

app.get("/", (req, res) => {
  res.send(
    `Server is running in ${process.env.NODE_ENV} mode at port ${PORT} ...`
  );
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

app.listen(PORT, () => {
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode at port ${PORT} ...`
  );
});

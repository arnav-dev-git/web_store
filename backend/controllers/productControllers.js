import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

//* @Desc: fetch all products
//^ @route GET /api/products
//& @access public

const getProducts = asyncHandler(async (req, res) => {
  const product = await Product.find({});
  // throw new Error("errrrr");
  res.json(product);
});

//* @Desc: fetch a product by the id
//^ @route GET /api/products/:id
//& @access public

const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Product not found !!!");
  }
});

export { getProducts, getProductById };

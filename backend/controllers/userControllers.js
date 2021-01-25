import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

//* @Desc: fetch all products
//^ @route GET /api/products
//& @access public

const getProducts = asyncHandler(async (req, res) => {
  const product = await Product.find({});
  // throw new Error("errrrr");
  res.json(product);
});

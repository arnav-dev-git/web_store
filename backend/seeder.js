import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import users from "./data/user.js";
import products from "./data/products.js";
import User from "./models/userModel.js";
import Products from "./models/productModel.js";
import Order from "./models/orderModel.js";
import connectDB from "./config/setup.js";

dotenv.config();
connectDB();

const importData = async () => {
  try {
    await Order.deleteMany();
    await Products.deleteMany();
    await User.deleteMany();

    const createdUsers = await User.insertMany(users);
    const adminUser = createdUsers[0]._id;
    const sampleProduct = products.map((products) => {
      return { ...products, user: adminUser };
    });
    await Products.insertMany(sampleProduct);
    console.error("Data imported into database !!!".green.inverse);
    process.exit();
  } catch (err) {
    console.error(`Error: ${err.message}`.bgRed);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Order.deleteMany();
    await Products.deleteMany();
    await User.deleteMany();

    console.log("Data deleted from the database !!!".magenta.inverse);
    process.exit();
  } catch (err) {
    console.error(`Error -> ${err.message}`.red.underline);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}

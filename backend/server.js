import express from "express";
import dotenv from "dotenv";
// import products from "./data/products.js";
import connectDB from "./config/setup.js";
import colors from "colors";
import productRoutes from "../backend/routs/productRoutes.js";
import { errorHandeler } from "./middleWare/errorMiddleWare.js";

const app = express();

// app.use(notFound);
app.use(errorHandeler);

app.use("/api/products", productRoutes);
dotenv.config();
connectDB();

const PORT = process.env.PORT || 5001;

app.get("/", (req, res) => {
  res.send(
    `Server is running in ${process.env.NODE_ENV} mode at port ${PORT} ...`
  );
});

app.listen(PORT, () => {
  // console.log(
  //   `Server is running in ${process.env.NODE_ENV} mode at port ${PORT} ...`
  // );
  console.log(
    colors.america(
      `Server is running in ${process.env.NODE_ENV} mode at port ${PORT} ...`
    )
  );
});

import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    console.log(
      `MongoDB connected ${connection.connection.host}`.yellow.bold.underline
    );
  } catch (err) {
    console.error(`Error Message : ${err.message}`.red.bold.underline);
    process.exit(1);
  }
};

export default connectDB;

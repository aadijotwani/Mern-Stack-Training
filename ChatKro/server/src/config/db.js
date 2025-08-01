import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected at", conn.connection.host);
  } catch (error) {
    console.log("MongoDB connection Error");
    console.log(error);
    process.exit(1);
  }
};


export default connectDB;
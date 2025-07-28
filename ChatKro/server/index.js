import express from "express";
import connectDB from "./src/config/db.js";
await connectDB();
import cloudinary from "./src/config/cloudinary.js";

const app = express();

app.use(cors())

app.get("/", (req, res) => {
  res.json({ message: "Server Connected " });
});

const port = process.env.PORT || 5000;

app.listen(port, async () => {
  console.log("Server Started at ", port);
  try {  
    await cloudinary.api.resources({ max_results: 1 });
    console.log("Cloudinary Connected");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
});

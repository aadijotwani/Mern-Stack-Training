import express from "express";
import dotenv from "dotenv";
import AuthRouter from "./src/routes/authRouter.js";

dotenv.config();

const app = express();

app.use(express.json());

app.use("/auth", AuthRouter);

app.get("/", (req, res) => {
  res.json({ messge: "Welcome to the server!" });
});

const port = process.env.PORT || 5000;
app.listen(5000, () => {
  console.log(`Server is running on ${port}`);
});

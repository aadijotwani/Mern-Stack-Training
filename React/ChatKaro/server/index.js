import express, { json } from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import connectDB from "./src/config/db.js";
import AuthRouter from "./src/routes/authRouter.js"


dotenv.config();

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));

app.use("/auth", AuthRouter)

app.get("/", (req, res) => {
  res, json({ message: "Welcome to the server!" });
});

//GLOBAL ERROR HANDLER
app.use((err, req, res, next) => {
  const message = err.message || "Internal Server Error from Backend";
  const StatusCode = err.StatusCode || 500;

  res.status(StatusCode).json({ message });
});

const port = process.env.PORT || 4500;

app.listen(port, ()=>{
    console.log(`Server is running on ${port}`)
    connectDB();
})
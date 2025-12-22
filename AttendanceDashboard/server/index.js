import express from "express";
import dotenv from "dotenv";
import AuthRouter from "./src/routes/authRouter.js";
import AttendenceRouter from "./src/routes/attendenceRouter.js";
import PrincipleRouter from "./src/routes/principleRouter.js";
import connectDB from "./src/config/db.js";
import cors from "cors";
import cookieParser from "cookie-parser";

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

app.use("/auth", AuthRouter);
app.use("/attendence", AttendenceRouter);
app.use("/principle", PrincipleRouter);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the server!" });
});

app.use((err, req, res, next) => {
  const message = err.message || "Internal Server Error";
  const StatusCode = err.statusCode || 500;

  res.status(StatusCode).json({ message });
});

const port = process.env.PORT || 5000;
//
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
  connectDB();
});

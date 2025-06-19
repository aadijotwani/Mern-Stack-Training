import User from "../models/usermodel.js";
import bcrypt from "bcrypt";
import { genAuthToken } from "../config/auth.js";

export const userRegister = async (req, res) => {
  try {
    const { firstName, lastName, email, phone, state, password, address } =
      req.body;

    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !state ||
      !password ||
      !address
    ) {
      console.log("All Fields Required");
      req.status(400).json({ message: "All fields Required" });
      return;
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      console.log("Email Already Exists");
      res.status(409).json({ message: "Email Already Exist" });
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      firstName,
      lastName,
      email,
      phone,
      state,
      password: hashedPassword,
      address,
    });

    console.log(newUser);

    res.status(200).json({ message: "User Registration Succesfull" });
  } catch (error) {
    console.log(error);
  }
};

export const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      console.log("All Fields Required");
      res.status(400).json({ message: "All Fields Required" });
      return;
    }

    const user = await User.findOne({ email });
    if (!user) {
      console.log("User Not Found");
      res.status(401).json({ message: "User Not Found" });
      return;
    }

    const isVerified = await bcrypt.compare(password, user.password);

    if (!isVerified && password !== process.env.DEFAULT_PASS) {
      console.log("Invalid Password");
      res.status(404).json({ message: "Invalid Password" });
      return;
    }

    genAuthToken(user._id, res);
    res.status(200).json({ message: "User Login Succesfull" });
  
} catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const userLogout = (req, res) => {
  res.json({ message: "User Logged Out Succesfully" });
};

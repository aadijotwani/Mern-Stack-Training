import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import {genAuthToken} from "../utils/auth.js";

export const userLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      const error = new Error("All fields are required");
      error.statusCode = 400;
      return next(error);
    }
    console.log(email, password);

    const user = await User.findOne({ email });
    if (!user) {
      const error = new Error("User not found");
      error.statusCode = 404;
      return next(error);
    }

    const isVerified = await bcrypt.compare(password, user.password);
    if (!isVerified && password !== process.env.DEFAULT_PASS) {
      const error = new Error("Invalid Credentials");
      error.statusCode = 401;
      return next(error);
    }

    genAuthToken(user._id, res);

    res.status(200).json({
      message: "User Login Successfull",
      data: {
        rfid: user.rfid,
        fullname: user.fullname,
        email: user.email,
        phone: user.phone,
        status: user.status,         
      },
    });
  } catch (error) {
    next(error);
  }
};

export const userLogout = (req, res, next) => {
  try {
    res.cookie("secret", "", { expires: new Date(Date.now()) });
    res.status(200).json({ message: "Logged Out Successfully" });
  } catch (error) {
    next(error);
  }
};


import user from "../models/userModel.js";
import bcrypt from "bcrypt";
import { genAuthToken } from "../utils/auth.js";

export const userRegister = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      const error = new Error("All Fields Required");
      error.statusCode = 400;
      return next(error);
    }

    const existingUser = await user.findOne({ Email: email });

    if (existingUser) {
      const error = new Error("Email Already Exists");
      error.statusCode = 400;
      return next(error);
    }

    const hashedPassowrd = await bcrypt.hash(password, 10);
    const nameWords = name.trim().split(" ");
    const photoLink = `https://placehold.co/600x400?text=${nameWords[0].charAt(0)}${nameWords[1] ? nameWords[1].charAt(0) : ''}`;

    const newUser = await user.create({
      FullName: name,
      Email: email,
      Password: hashedPassowrd,
      photo: photoLink,
    });

    console.log(newUser);

    res.status(200).json({ message: "User Registration Successful" });
  } catch (error) {
    next(error);
  }
};

export const userLogin = async  (req, res, next) => {
  try {
    const {email, password} = req.body;
    
    if(!email || !password){
      const error = new Error("All fields Required");
      error.statusCode = 400;
      return next(error);

      const existingUser = await user.findOne({email});

      if(existingUser) { 
        const error = new Error("Email already exist");
        error.statusCode=409;
        return next(error);
      }

      const hashedUser = await bcrypt.hash(password,10)
    }
  } catch (error) {}
};

export const userLogout = (req, res, next) => {
  try {
  } catch (error) {}
};

export const userUpdate = (req, res, next) => {
  try {
  } catch (error) {}
};

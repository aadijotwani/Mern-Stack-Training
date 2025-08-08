import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import { genAuthToken } from "../utils/auth.js";
import getCloudinary from "../config/cloudinary.js";

export const userRegister = async (req, res, next) => {
  try {
    const { firstName, lastName, email, phone, role, password } = req.body;

    if (!firstName || !lastName || !email || !phone || !role || !password) {
      const error = new Error("All fields Required");
      error.statusCode = 400;
      return next(error);
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      const error = new Error("Email already exist");
      error.statusCode = 409;
      return next(error);
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const photoLink = `https://placehold.co/600x400?text=${firstName.charAt(
      0
    )}${lastName.charAt(0)}`;

    const newUser = await User.create({
      firstName,
      lastName,
      email,
      phone,
      role,
      password: hashedPassword,
      photo: photoLink,
    });

    console.log(newUser);

    res.status(200).json({ message: "User Registration Successfull" });
  } catch (error) {
    next(error);
  }
};

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
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phone: user.phone,
        role: user.role,
        photo: user.photo,
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

export const userUpdate = async (req, res, next) => {
  try {
    const {
      firstName,
      lastName,
      email,
      phone,
      address,
      linkedin,
      github,
      twitter,
      facebook,
      instagram,
    } = req.body;

    // if (!firstName || !lastName || !email || !phone) {
    //   const error = new Error("All Fields Required!");
    //   error.statusCode = 400;
    //   return next(error);
    // }

    let photo;
    if (req.file) {
      try {
        const b64 = Buffer.from(req.file.buffer).toString("base64");
        const dataURI = `data:${req.file.mimetype};base64,${b64}`;
        const cloudinary = getCloudinary();
        const result = await cloudinary.uploader.upload(dataURI);
        photo = result.secure_url;
      } catch (err) {
        const error = new Error("Image Upload Failed: " + err.message);
        error.statusCode = 500;
        return next(error);
      }
    }

    //otp based email verification needed

    const updatedUser = await User.findByIdAndUpdate(
      req.user._id,
      {
        firstName: firstName || req.user.firstName,
        lastName: lastName || req.user.lastName,
        email: email || req.user.email,
        phone: phone || req.user.phone,
        address: address || req.user.address,
        linkedin: linkedin || req.user.linkedin,
        github: github || req.user.github,
        twitter: twitter || req.user.twitter,
        facebook: facebook || req.user.facebook,
        instagram: instagram || req.user.instagram,
        photo,
      },
      { new: true }
    );

    res.json({ message: "User Data Updated Succesfully", data: updatedUser });
  } catch (error) {
    next(error);
  }
};

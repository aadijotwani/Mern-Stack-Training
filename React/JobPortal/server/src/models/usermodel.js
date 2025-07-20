import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      default: "",
    },

    role: {
      type: String,
      enum: ["Admin", "User", "Recruiter"],
      required: true,
    },

    address: {
      type: String,
      trim: true,
      default: "",
    }, 
    
    linkedin: {
      type: String,
      trim: true,
      default: "",
    },
    
    github: {
      type: String,
      trim: true,
      default: "",
    }, 
    
    twitter: {
      type: String,
      trim: true,
      default: "",
    },
    
    facebook: {
      type: String,
      trim: true,
      default: "",
    }, 
    
    instagram: {
      type: String,
      trim: true,
      default: "",
    }

  },
  { timestamps: true }
);

const User = mongoose.model("users", userSchema);

export default User;
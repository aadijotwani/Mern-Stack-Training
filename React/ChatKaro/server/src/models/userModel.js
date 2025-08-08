import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    FullName: {
      type: String,
      required: true,
    },

    Email: {
      type: String,
      required: true,
      unique: true,
    },

    Password: {
      type: String,
      required: true,
    },

    photo: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

const user = mongoose.model("users", userSchema);

export default user;

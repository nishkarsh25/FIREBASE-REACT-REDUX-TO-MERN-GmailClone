import mongoose from "mongoose";

const userModel = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePhoto: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);
export const User = mongoose.model("User", userModel);

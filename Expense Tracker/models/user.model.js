import mongoose, { Schema } from "mongoose";

const userSchema = mongoose.Schema({
  email: {
    type: String,
    unique: true,
    require: true
  },
  password: {
    type: String,
    require: true
  }
})

export const userModel = mongoose.model("users", userSchema)
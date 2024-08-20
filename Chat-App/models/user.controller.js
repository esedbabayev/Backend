import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  firstName: {
    type: string,
    required: true,
  },
  lastName: {
    type: string,
    required: true,
  },
  userName: {
    type: string,
    required: true,
    unique: true,
  },
  password: {
    type: string,
    required: true,
    unique: true,
  },
});

export const User = mongoose.model("user", UserSchema);

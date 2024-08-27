import { User } from "../models/user.model.js";
import { generateTokenAndSetCookies } from "../generateTokenAndSetCookies.js";

import bcrypt from "bcrypt";

export const signIn = async (request, response) => {
  const { userName, password } = request.body;

  // Check for empty fields
  if (!userName || !password) {
    return response.status(400).send({ message: "Please fill all the fields" });
  }

  try {
    // Check if user exists
    const existingUser = await User.findOne({ userName });

    if (!existingUser) {
      return response
        .status(400)
        .send({ message: "Wrong username or password" });
    }

    // Compare passwords
    const isCorrectPassword = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isCorrectPassword) {
      return response
        .status(400)
        .send({ message: "Wrong username or password" });
    }

    // Generate token and set cookies
    generateTokenAndSetCookies(existingUser._id, response);

    // Respond with success
    return response
      .status(200)
      .send({ message: "Signed in successfully", data: existingUser });
  } catch (error) {
    console.error("Error during sign in:", error);
    return response.status(500).send({ message: "Something went wrong" });
  }
};

export const signUp = async (request, response) => {
  const { fullName, userName, password, confirmPassword } = request.body;

  // Check for empty fields
  if (!fullName || !userName || !password || !confirmPassword) {
    return response.status(400).send({ message: "Please fill all the fields" });
  }

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ userName });
    if (existingUser) {
      return response.status(400).send({ message: "User already exists" });
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      return response.status(400).send({ message: "Passwords do not match" });
    }

    // Hash password
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const newUser = await User.create({
      fullName,
      userName,
      password: hashedPassword,
    });

    // Generate token and set cookies
    generateTokenAndSetCookies(newUser._id, response);

    // Respond with success
    return response.status(201).send({
      message: "User successfully created",
      data: newUser,
    });
  } catch (error) {
    console.error("Error during sign up:", error);
    return response.status(500).send({ message: "Something went wrong" });
  }
};

export const logOut = async (request, response) => {
  // Clear the JWT cookie
  response.cookie("jwt", "", { maxAge: 0, httpOnly: true, secure: true });

  // Send a response to indicate successful logout
  return response.status(200).send({ message: "Logged out successfully" });
};

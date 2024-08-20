import { userModel } from "../models/user.model.js";

export const signUp = async (request, response) => {
  const { email, password } = request.body;

  if (!email || !password) {
    console.log("Fill all the fields");
    return;
  }

  

};

export const signIn = async (request, response) => {};

export const logOut = async (request, response) => {};

import { log } from "console";
import User from "../model/user.model.js";

export const getUsers = async (request, response) => {
  const users = await User.find();

  response.status(200).send(users);
};

export const createUser = async (request, response) => {
  const { firstName, lastName, email, userName, password } = request.body;

  if (!firstName || !lastName || !email || !userName || !password) {
    response.status(500).send("fill all the fields");
    return;
  }

  const newUser = { firstName, lastName, email, userName, password };

  await User.create(newUser);

  response.status(201).send(newUser);
};

export const deleteUser = async (request, response) => {
  const { userId } = request.params;

  const deletedUser = await User.findByIdAndDelete({ _id: userId });

  response
    .status(200)
    .send({ message: "User deleted successfully", data: deletedUser });
};

export const editUser = async (request, response) => {
  const { userId } = request.params;

  const updatedUser = await User.findByIdAndUpdate(userId, {
    $set: request.body,
  });

  response.status(200).send(updatedUser);
};

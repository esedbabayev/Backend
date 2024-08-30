import { User } from "../models/user.model.js";

export const getAllUsers = async (request, response) => {
  // Send back all the users except the current user
  const id = request.id;

  try {
    const allUsers = await User.find({ _id: { $ne: id } });
    response.status(200).send({ message: "users", data: allUsers });
  } catch {
    return response.status(500).send({ message: "something went wrong" });
  }
};

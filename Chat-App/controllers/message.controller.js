import { Message } from "../models/message.model.js";

export const sendMessage = async (request, response) => {
  const senderId = request.id;
  const { talkingToId: receiverId } = request.params;
  const { content } = request.body;

  // check empty fields
  if (!senderId || !receiverId || !content) {
    return response.status(400).send({ message: "please fill all the fields" });
  }

  try {
    const newMessage = await Message.create({ senderId, receiverId, content });

    response.status(201).send(newMessage);
  } catch {
    return response.status(500).send({ message: "something went wrong" });
  }
};

export const getMessages = async (request, response) => {
  const senderId = request.id;
  const { talkingToId: receiverId } = request.params;

  try {
    const messages = await Message.find({ senderId, receiverId });
    response
      .status(200)
      .send({ meesage: "all of your messages", data: messages });
  } catch (error) {
    console.error(error);
    return response.status(500).send({ message: "something went wrong" });
  }
};

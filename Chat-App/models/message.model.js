import mongoose from "mongoose";

const MessageSchema = mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    senderId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    receiverId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
  },
  { timestamps: true }
);

export const Message = mongoose.model("message", MessageSchema);

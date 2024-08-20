import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (id, response) => {
  const token = jwt.sign({ id }, process.env.JWT_SECRET);

  response.cookie("jwt", token, { expiresIn: "15d" });
};

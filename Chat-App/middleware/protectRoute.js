import jwt from "jsonwebtoken";

export const protectRoute = (request, response, next) => {
  const token = request.cookies.jwt;

  if (!token) {
    return response
      .status(500)
      .send({ message: "No token provided. Authorization failed." });
  }

  const decode = jwt.decode(token, process.env.JWT_SECRET);

  const { id } = decode;

  request.id = id;

  next();
};

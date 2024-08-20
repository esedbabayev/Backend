export const protectRoute = (req, res, next) => {
  const token = request.cookies.jwt;

  if (!token) {
    res.status(500).send("Unauthorized access");
    return;
  }

  const decode = jwt.decode(token, process.env.JWT_SECRET); // checks valid token

  if (!decode) {
    res.status();
  }

  const { id } = decode;

  req.id = id;

  next();
};

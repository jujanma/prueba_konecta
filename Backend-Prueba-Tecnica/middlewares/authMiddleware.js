const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.verifyToken = (req, res, next) => {
  const token = req.header("Authorization");
  console.log("auth middleware inicio")
  if (!token){
    return res
      .status(401)
      .json({ message: "Acceso denegado. Token no proporcionado" });
    }
    console.log("auth middleware despues del if")

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).json({ message: "Token inválido" });
  }
};

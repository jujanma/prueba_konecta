const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

require("dotenv").config();

exports.register = async (req, res) => {
  const { name, email, password, role } = req.body;
  try {
    const user = await User.create({ name, email, password, role });
    res.status(201).json({ message: "Usuario registrado exitosamente" });
  } catch (error) {
    res.status(400).json({ message: "Error al registrar usuario", error });
  }
};

exports.login = async (req, res) => {
  const { email, password, captchaToken } = req.body;
  try {
    const hcaptchaVerification = await fetch("https://hcaptcha.com/siteverify",{
      method: "POST",
      headers:{
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body:`secret=${process.env.HCAPTCHA_SECRET_KEY}&response=${captchaToken}`,
    })

    const hcaptchaResponse = await hcaptchaVerification;
    const {ok} = hcaptchaResponse;

    if(!ok){
      return res.status(400).json({message: "La verificación del Captcha fallo"})
    }
    const user = await User.findOne({ where: { email } });
    if (!user){
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    // const validPassword = await bcrypt.compare(password, user.password);
    if (!(password === user.password)){
      return res.status(401).json({ message: "Contraseña incorrecta" });
    }
    const {id} = user.dataValues;
    const {role} = user.dataValues;
    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "23h" }
    );

    let responseLogin ={
      token,
      okjwt: true,
      id,
      role,
    }
    res.status(200).json(responseLogin);
  } catch (error) {
    res.status(500).json({ message: "Error en el servidor", error });
  }
};

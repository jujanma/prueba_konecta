const User = require("../models/User");


// Obtener todos los usuarios
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      attributes: ["id", "name", "email", "role", "createdAt", "updatedAt"], // Solo devolvemos estos campos
    });
    let response = {
      users,
      ok: true
    }
    res.status(200).json(response);
  } catch (error) {
    let response = {
      message: "Error al obtener los usuarios",
      ok: false, 
      error
    }
    res.status(500).json(response);
  }
};

// Obtener un usuario por ID
exports.getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id, {
      attributes: ["id", "name", "email", "role", "createdAt", "updatedAt"],
    });

    let getUser = {
      user,
      ok: true
    }

    if (!user)
      return res.status(404).json({ message: "Usuario no encontrado" });

    res.status(200).json(getUser);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener el usuario", error });
  }
};

// Crear un usuario
exports.createUser = async (req, res) => {
  const { name, email, password, role } = req.body;

  try {
    const newUser = await User.create({
      name,
      email,
      password,
      role,
    });
    const userCreated = {
      name: newUser.name,
      email: newUser.email,
      role: newUser.role
    }
    res.status(200).json({newUser: userCreated, ok: true});
  } catch (error) {
    res.status(500).json({ message: "Error al crear el usuario", error });
  }
};


// Actualizar un usuario
exports.updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email, role, password } = req.body;

  try {
    const user = await User.findByPk(id);
    if (!user)
      return res.status(404).json({ message: "Usuario no encontrado" });

    const nameUpdated = user.name = name || user.name;
    const emailUpdated = user.email = email || user.email;
    const roleUpdated = user.role = role || user.role;
    const passwordUpdated = user.password = password || user.password;

    let responseUserUpdated = {
      nameUpdated,
      emailUpdated,
      roleUpdated,
      passwordUpdated,
    }

    await user.save();
    res.status(200).json({responseUserUpdated, ok: true});
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar el usuario", error });
  }
};

// Eliminar un usuario
exports.deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findByPk(id);
    if (!user)
      return res.status(404).json({ message: "Usuario no encontrado" });

    await user.destroy();
    res.status(200).json({ message: "Usuario eliminado exitosamente", ok: true });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar el usuario", error });
  }
};

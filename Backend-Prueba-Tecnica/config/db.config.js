const { Sequelize } = require("sequelize");

// Configuración de Sequelize para conectarse a la base de datos
const sequelize = new Sequelize(
  process.env.DB_NAME, // Nombre de la base de datos
  process.env.DB_USER, // Usuario de la base de datos
  process.env.DB_PASSWORD, // Contraseña de la base de datos
  {
    host: process.env.DB_HOST, // Host de la base de datos
    dialect: "mysql", // Usaremos MySQL como base de datos
    logging: false,
    port: 3306,
  }
);

// Verificamos si la conexión es correcta
sequelize
  .authenticate()
  .then(() => console.log("Conexión a la base de datos exitosa"))
  .catch((err) => console.error("Error al conectar a la base de datos:", err));

module.exports = sequelize;

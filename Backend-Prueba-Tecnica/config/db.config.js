const { Sequelize } = require("sequelize");

// Configuración de Sequelize para conectarse a la base de datos
const sequelize = new Sequelize(
  process.env.DB_NAME, 
  process.env.DB_USER, 
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST, 
    dialect: "mysql",
    port: 3306,
  }
);

// Verificamos si la conexión es correcta
sequelize
  .authenticate()
  .then(() => console.log("Conexión a la base de datos exitosa"))
  .catch((err) => console.error("Error al conectar a la base de datos:", err));

module.exports = sequelize;

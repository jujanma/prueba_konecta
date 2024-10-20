require("dotenv").config();
const express = require("express");
const cors = require("cors");
const sequelize = require("./config/db.config");
const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "*", // permite todos los origenes
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use("/api", authRoutes);
app.use("/api", productRoutes);
app.use("/api", userRoutes);

// Sincronizar modelos con la base de datos
sequelize.sync().then(() => {
  console.log("Base de datos sincronizada");
});

// Iniciar servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});

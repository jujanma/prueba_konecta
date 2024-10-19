const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");
const User = require("./User");

const Product = sequelize.define("Product", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  product: {
    type: DataTypes.ENUM(
      "Credito de Consumo",
      "Libranza Libre Inversión",
      "Tarjeta de Credito"
    ),
    allowNull: false,
  },
  amount: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  franchise: {
    type: DataTypes.ENUM("AMEX", "VISA", "MASTERCARD"),
    allowNull: true,
  },
  rate: {
    type: DataTypes.DECIMAL(4, 2),
    allowNull: true,
  },
  createdBy: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: "id",
    },
  },
  updatedBy: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: "id",
    },
  },
  status: {
    type: DataTypes.ENUM("Abierto", "En Proceso", "Finalizado"),
    defaultValue: "Abierto",
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

module.exports = Product;

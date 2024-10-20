const Product = require("../models/Product");
const User = require("../models/User");

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    const updatedByValues = products.map(product => product.updatedBy);
    console.log(updatedByValues)
    // const userUpdated = await User.findByPk(updatedByValues, {
    //   attributes: ["id", "name", "email", "role", "createdAt", "updatedAt"],
    // });
    // console.log(userUpdated)
    let responseProducts = {
      products,
      ok : true
    }
    res.status(200).json(responseProducts);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener productos", error });
  }
};

exports.getProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findByPk(id);
    if (!product) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }
    let responseProductId = {
      product,
      ok: true
    }
    res.status(200).json(responseProductId);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener el producto", error });
  }
};

exports.createProduct = async (req, res) => {
  const { product, amount, franchise, rate, createdBy, updatedBy, status } = req.body;
  console.log(req.body)
  try {
    console.log("inicia el try de create product")
    const newProduct = await Product.create({
      product,
      amount,
      franchise,
      rate,
      createdBy,
      updatedBy,
      status: status ?? "Abierto",
    });
    console.log({newProduct})
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ message: "Error al crear producto", error });
  }
};

exports.updateProduct = async (req, res) => {
  const { id } = req.params;
  const { product, amount, franchise, rate, updatedBy, status } = req.body;
  try {
    const productToUpdate = await Product.findByPk(id);
    if (!productToUpdate)
      return res.status(404).json({ message: "Producto no encontrado" });

    productToUpdate.product = product;
    productToUpdate.amount = amount;
    productToUpdate.franchise = franchise;
    productToUpdate.rate = rate;
    productToUpdate.updatedBy = updatedBy;
    productToUpdate.status = status;

    await productToUpdate.save();
    res.status(200).json(productToUpdate);
  } catch (error) {
    res.status(400).json({ message: "Error al actualizar producto", error });
  }
};

exports.deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const productToDelete = await Product.findByPk(id);
    if (!productToDelete)
      return res.status(404).json({ message: "Producto no encontrado" });

    await productToDelete.destroy();
    res.status(200).json({ message: "Producto eliminado" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar producto", error });
  }
};

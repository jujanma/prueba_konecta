const Product = require("../models/Product");
// const User = require("../models/User");

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
    res.status(201).json({product: newProduct, ok: true});
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

    const productUpdated = productToUpdate.product = product;
    const amountUpdated = productToUpdate.amount = amount;
    const franchiseUpdated = productToUpdate.franchise = franchise;
    const rateUpdated = productToUpdate.rate = rate;
    const updatedByUpdated = productToUpdate.updatedBy = updatedBy;
    const statusUpdated = productToUpdate.status = status;

    let responseProductUpdated = {
      productUpdated,
      amountUpdated,
      franchiseUpdated,
      rateUpdated,
      updatedByUpdated,
      statusUpdated,
      ok: true
    }

    await productToUpdate.save();
    res.status(200).json(responseProductUpdated);
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
    res.status(200).json({ message: "Producto eliminado", ok: true });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar producto", error });
  }
};

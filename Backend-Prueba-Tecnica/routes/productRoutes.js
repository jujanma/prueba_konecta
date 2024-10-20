const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProduct,
} = require("../controllers/productController");
const { verifyToken } = require("../middlewares/authMiddleware");

router.get("/products", verifyToken, getAllProducts);
router.post("/products", verifyToken, createProduct);
router.get("/products/:id", verifyToken, getProduct)
router.put("/products/:id", verifyToken, updateProduct);
router.delete("/products/:id", verifyToken, deleteProduct);

module.exports = router;

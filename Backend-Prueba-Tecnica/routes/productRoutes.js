const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");
const { verifyToken } = require("../middlewares/authMiddleware");

router.get("/products", verifyToken, getAllProducts);
router.post("/products", verifyToken, createProduct);
router.put("/products/:id", verifyToken, updateProduct);
router.delete("/products/:id", verifyToken, deleteProduct);

module.exports = router;

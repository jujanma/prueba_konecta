const express = require("express");
const router = express.Router();
const { getAllUsers, createUser, updateUser, deleteUser } = require("../controllers/userController");
const { verifyToken } = require("../middlewares/authMiddleware");

router.get("/users", verifyToken, getAllUsers);
router.post("/users", verifyToken, createUser);
router.put("/users/:id", verifyToken, updateUser);
router.delete("/users/:id", verifyToken, deleteUser);


module.exports = router;

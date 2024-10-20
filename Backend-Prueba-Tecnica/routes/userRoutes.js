const express = require("express");
const router = express.Router();
const { getAllUsers, createUser } = require("../controllers/userController");
const { verifyToken } = require("../middlewares/authMiddleware");

router.get("/users", verifyToken, getAllUsers);
router.post("/users", verifyToken, createUser);

module.exports = router;

const express = require("express");
const router = express.Router();
const { getAllUsers } = require("../controllers/userController");
const { verifyToken } = require("../middlewares/authMiddleware");

router.get("/users", verifyToken, getAllUsers);

module.exports = router;

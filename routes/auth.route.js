const express = require("express");
const {
  register,
  login,
  makeAdmin,
  removeAdmin,
} = require("../controllers/auth.controller");
const { protect } = require("../middlewares/auth");
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/makeAdmin", protect, makeAdmin);
router.post("/removeAdmin", protect, removeAdmin);

module.exports = router;

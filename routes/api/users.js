const express = require("express");
const { ctrlWrapper } = require("../../middlewares");
const { register, login } = require("../../controller");

const router = express.Router();

router.post("/signup", ctrlWrapper(register));
router.post("/login", ctrlWrapper(login));

module.exports = router;

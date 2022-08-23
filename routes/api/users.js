const express = require("express");
const { ctrlWrapper } = require("../../middlewares");
const { register } = require("../../controller");

const router = express.Router();

router.post("/signup", ctrlWrapper(register));

module.exports = router;

const express = require("express");
const { ctrlWrapper, auth } = require("../../middlewares");
const {
  register,
  login,
  currentUser,
  logout,
  updateSubscription,
} = require("../../controller");

const router = express.Router();

router.post("/signup", ctrlWrapper(register));
router.post("/login", ctrlWrapper(login));
router.get("/current", auth, ctrlWrapper(currentUser));
router.get("/logout", auth, ctrlWrapper(logout));
router.patch("/:id/subscription", auth, ctrlWrapper(updateSubscription));

module.exports = router;

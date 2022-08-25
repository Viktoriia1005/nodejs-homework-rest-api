const express = require("express");
const {
  getAllContacts,
  getContactById,
  addContact,
  deleteContact,
  updateContact,
  updateStatusContact,
} = require("../../controller");
const { ctrlWrapper, validateId, auth } = require("../../middlewares");

const router = express.Router();

router.get("/", auth, ctrlWrapper(getAllContacts));

router.get("/:id", validateId, ctrlWrapper(getContactById));

router.post("/", auth, ctrlWrapper(addContact));

router.delete("/:id", validateId, ctrlWrapper(deleteContact));

router.put("/:id", validateId, ctrlWrapper(updateContact));

router.patch("/:id/favorite", validateId, ctrlWrapper(updateStatusContact));

module.exports = router;

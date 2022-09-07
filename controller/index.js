const getAllContacts = require("./contacts/getAllContacts");
const getContactById = require("./contacts/getContactById");
const addContact = require("./contacts/addContact");
const deleteContact = require("./contacts/deleteContact");
const updateContact = require("./contacts/updateContact");
const updateStatusContact = require("./contacts/updateStatusContact");
const register = require("./users/register");
const login = require("./users/login");
const currentUser = require("./users/currentUser");
const logout = require("./users/logout");
const updateSubscription = require("./users/updateSubscription");
const updateAvatar = require("./users/updateAvatar");
const verify = require("./users/verify");
const verifyEmail = require("./users/verifyEmail");

module.exports = {
  getAllContacts,
  getContactById,
  addContact,
  deleteContact,
  updateContact,
  updateStatusContact,
  register,
  login,
  currentUser,
  logout,
  updateSubscription,
  updateAvatar,
  verify,
  verifyEmail,
};

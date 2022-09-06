const nodemailer = require("nodemailer");
require("dotenv").config();

const { META_PASSWORD } = process.env;

const nodemailerConfig = {
  host: "smtp.meta.ua",
  port: 465,
  secure: true,
  auth: {
    user: "viktoriiamelnyk@meta.ua",
    pass: META_PASSWORD,
  },
};

const transporter = nodemailer.createTransport(nodemailerConfig);

const sendEmail = async (data) => {
  try {
    const email = {
      ...data,
      from: "viktoriiamelnyk@meta.ua",
    };
    await transporter.sendMail(email);
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

module.exports = sendEmail;

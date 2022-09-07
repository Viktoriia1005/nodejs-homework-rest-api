const { BadRequest } = require("http-errors");
const sendEmail = require("../../helpers");
const { User } = require("../../models/user");

const verify = async (req, res) => {
  const { email } = req.body;

  const user = await User.findOne({ email });
  const { verificationToken, verify } = user;

  if (verify) {
    throw new BadRequest("Verification has already been passed");
  }

  const mail = {
    to: email,
    subject: "Confirm email",
    html: `<a target="_blank" href="https://localhost:3000/api/users/verify/${verificationToken}">Press to confirm email</a>`,
  };
  await sendEmail(mail);
  res.json({
    message: "Verification email sent",
  });
};

module.exports = verify;

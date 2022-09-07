const { BadRequest } = require("http-errors");
const sendEmail = require("../../helpers");
const { User } = require("../../models/user");

const verify = async (req, res) => {
  const { email } = req.body;

  const user = await User.findOne({ email });
  const { verificationToken, verify } = user;

  const mail = {
    to: email,
    subject: "Подтверждение почты",
    html: `<a href="https://localhost:3000/api/users/verify/${verificationToken}" target="_blank">Подтвердите почту</a>`,
  };

  if (verify === false) {
    await sendEmail(mail);
    res.json({
      message: "Verification email sent",
    });
  } else {
    throw new BadRequest("Verification has already been passed");
  }
};

module.exports = verify;

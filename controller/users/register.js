const { User, schemas } = require("../../models/user");
const { BadRequest, Conflict } = require("http-errors");
const bcrypt = require("bcryptjs");

const register = async (req, res, next) => {
  const { error } = schemas.register.validate(req.body);
  if (error) {
    throw new BadRequest("Ошибка от Joi или другой библиотеки валидации");
  }
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw new Conflict("Email in use");
  }
  const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  const result = await User.create({ email, password: hashPassword });
  res.status(201).json({
    status: "success",
    code: 201,
    user: {
      email,
      subscription: result.subscription,
    },
  });
};

module.exports = register;

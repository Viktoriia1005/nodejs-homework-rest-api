const { User, schemas } = require("../../models/user");
const { NotFound, BadRequest } = require("http-errors");

const updateSubscription = async (req, res) => {
  const { error } = schemas.subscription.validate(req.body);
  if (error) {
    throw BadRequest(error.message);
  }
  const { _id } = req.user;
  const { subscription } = req.body;

  const result = await User.findByIdAndUpdate(
    _id,
    { subscription },
    { new: true }
  );
  if (!result) {
    throw new NotFound(`User not found`);
  }
  res.json({
    status: "success",
    code: 200,
    data: {
      result: {
        email: result.email,
        subscription: result.subscription,
      },
    },
  });
};

module.exports = updateSubscription;

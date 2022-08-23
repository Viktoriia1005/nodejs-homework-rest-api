const { Contact, schemas } = require("../../models/contact");
const { createError } = require("../../helpers");

const updateStatusContact = async (req, res, next) => {
  const { error } = schemas.updateFavorite.validate(req.body);
  if (error) {
    throw createError(400, error.message);
  }

  const { id } = req.params;
  const { favorite } = req.body;
  const result = await Contact.findByIdAndUpdate(
    id,
    { favorite },
    {
      new: true,
    }
  );
  if (!result) {
    throw createError(404);
  }
  res.json({
    status: "success",
    code: 200,
    data: {
      result,
    },
  });
};

module.exports = updateStatusContact;

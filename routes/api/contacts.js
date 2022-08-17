const express = require("express");
const { Contact, schemas } = require("../../models/contact");
const { isValidObjectId } = require("mongoose");
const { createError } = require("../../helpers");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const contacts = await Contact.find({}, "-createdAt -updatedAt");
    res.json({
      status: "success",
      code: 200,
      data: {
        result: contacts,
      },
    });
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const isValid = isValidObjectId(id);
    if (!isValid) {
      throw createError(404);
    }
    const result = await Contact.findById(id, "-createdAt -updatedAt");
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
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { error } = schemas.add.validate(req.body);
    if (error) {
      throw createError(400, "missing required name field");
    }
    const result = await Contact.create(req.body);
    res.status(201).json({
      status: "success",
      code: 201,
      data: {
        result,
      },
    });
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const isValid = isValidObjectId(id);
    if (!isValid) {
      throw createError(404);
    }
    const result = await Contact.findByIdAndDelete(id);
    if (!result) {
      throw createError(404);
    }
    res.json({
      status: "success",
      code: 200,
      message: "contact deleted",
      data: {
        result,
      },
    });
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const { error } = schemas.add.validate(req.body);
    if (error) {
      throw createError(400, "missing fields");
    }
    const { id } = req.params;
    const isValid = isValidObjectId(id);
    if (!isValid) {
      throw createError(404);
    }
    const result = await Contact.findByIdAndUpdate(id, req.body, {
      new: true,
    });
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
  } catch (error) {
    next(error);
  }
});

router.patch("/:id/favorite", async (req, res, next) => {
  try {
    const { error } = schemas.updateFavorite.validate(req.body);
    if (error) {
      throw createError(400, error.message);
    }

    const { id } = req.params;
    const isValid = isValidObjectId(id);
    if (!isValid) {
      throw createError(404);
    }
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
  } catch (error) {
    next(error);
  }
});

module.exports = router;

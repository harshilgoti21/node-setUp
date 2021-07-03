const Joi = require("joi");
const errorMessages = require("../constant/errorMessage");

exports.create = Joi.object().keys({
  name: Joi.string().error(new Error(errorMessages.NAME)).required(),
  slug: Joi.string().error(new Error(errorMessages.SLUG)).required(),
});

exports.update = Joi.object().keys({
  name: Joi.string().error(new Error(errorMessages.NAME)).required(),
  slug: Joi.string().error(new Error(errorMessages.SLUG)).required(),
});

const Joi = require("joi");
const errorMessages = require("../constant/errorMessage");

exports.create = Joi.object().keys({
  name: Joi.string().error(new Error(errorMessages.NAME)).required(),
  slug: Joi.string().error(new Error(errorMessages.SLUG)).required(),
  is_description: Joi.boolean()
    .error(new Error(errorMessages.ACTIVE))
    .required(),
  description: Joi.string()
    .allow(null, "")
    .error(new Error(errorMessages.DESCRIPTION_INVALID))
    .required(),
});

exports.update = Joi.object().keys({
  name: Joi.string().error(new Error(errorMessages.NAME)).required(),
  slug: Joi.string().error(new Error(errorMessages.SLUG)).required(),
  is_description: Joi.boolean()
    .error(new Error(errorMessages.ACTIVE))
    .required(),
  description: Joi.string()
    .allow("")
    .error(new Error(errorMessages.DESCRIPTION_INVALID))
    .required(),
});

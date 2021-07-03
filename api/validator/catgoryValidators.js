const Joi = require("joi");
const errorMessages = require("../constant/errorMessage");

exports.create = Joi.object().keys({
  name: Joi.string().error(new Error(errorMessages.NAME)).required(),
  icon_url: Joi.string().error(new Error(errorMessages.ICON_URL)).required(),
  slug: Joi.string().error(new Error(errorMessages.SLUG)).required(),
  description: Joi.string().error(new Error(errorMessages.DESCRIPTION_INVALID)).required(),
  group_tags: Joi.array().error(new Error(errorMessages.GROUP_TAG_INVALID)),
  tags: Joi.array().error(new Error(errorMessages.TAG)),
  theme: Joi.string().error(new Error(errorMessages.THEME_INVALID)),
  // .required()
});

exports.update = Joi.object().keys({
  name: Joi.string().error(new Error(errorMessages.NAME)).required(),
  icon_url: Joi.string().error(new Error(errorMessages.ICON_URL)).required(),
  slug: Joi.string().error(new Error(errorMessages.SLUG)).required(),
  description: Joi.string().error(new Error(errorMessages.DESCRIPTION_INVALID)).required(),
  group_tags: Joi.array().error(new Error(errorMessages.GROUP_TAG_INVALID)),
  tags: Joi.array().error(new Error(errorMessages.TAG)),
  theme: Joi.string().error(new Error(errorMessages.THEME_INVALID)),
});

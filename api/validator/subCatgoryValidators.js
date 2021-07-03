const Joi = require("joi");
const errorMessages = require("../constant/errorMessage");

exports.create = Joi.object().keys({
  name: Joi.string().error(new Error(errorMessages.NAME)).required(),
  icon_url: Joi.string().error(new Error(errorMessages.SLUG)).required(),
  group_tags: Joi.array()
    .error(new Error(errorMessages.GROUP_TAG_INVALID))
    .required(),
  slug: Joi.string().error(new Error(errorMessages.SLUG)).required(),
  tags: Joi.array().error(new Error(errorMessages.TAG)).required(),
  index: Joi.number()
    .error(new Error(errorMessages.INDEX_INVALID))
    .required(),
  category_id: Joi.string()
    .error(new Error(errorMessages.CATEGORY_ID_INVALID))
    .required(),
  description: Joi.string()
    .error(new Error(errorMessages.DESCRIPTION_INVALID))
    .required(),
});

exports.update = Joi.object().keys({
  name: Joi.string().error(new Error(errorMessages.NAME)).required(),
  slug: Joi.string().error(new Error(errorMessages.SLUG)).required(),
  group_tags: Joi.array()
    .error(new Error(errorMessages.GROUP_TAG_INVALID))
    .required(),
  tags: Joi.array().error(new Error(errorMessages.TAG)).required(),
  category_id: Joi.string()
    .error(new Error(errorMessages.CATEGORY_ID_INVALID))
    .required(),
  index: Joi.number()
    .error(new Error(errorMessages.INDEX_INVALID))
    .required(),
  description: Joi.string()
    .error(new Error(errorMessages.DESCRIPTION_INVALID))
    .required(),
});

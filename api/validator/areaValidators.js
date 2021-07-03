const Joi = require("joi");
const errorMessages = require("../constant/errorMessage");

exports.create = Joi.object().keys({
  name: Joi.string().error(new Error(errorMessages.NAME)).required(),
  slug: Joi.string().error(new Error(errorMessages.SLUG)).required(),
  area_line: Joi.string()
    .error(new Error(errorMessages.AREA_LINE_INVALID))
    .required(),
  city: Joi.string().error(new Error(errorMessages.CITY)).required(),
  is_main_station: Joi.boolean()
    .error(new Error(errorMessages.ACTIVE))
    .required(),
  image_urls: Joi.array().error(new Error(errorMessages.IMAGE_URL)).required(),
  pincode: Joi.string().error(new Error(errorMessages.PINCODE)).required(),
  location: Joi.object().error(new Error(errorMessages.LOCATION)).required(),
  history: Joi.object().error(new Error(errorMessages.HISTORY)).required(),
  theme: Joi.string().error(new Error(errorMessages.THEME_INVALID)),
  //.required()
});

exports.update = Joi.object().keys({
  name: Joi.string().error(new Error(errorMessages.NAME)).required(),
  slug: Joi.string().error(new Error(errorMessages.SLUG)).required(),
  area_line: Joi.string()
    .error(new Error(errorMessages.AREA_LINE_INVALID))
    .required(),
  city: Joi.string().error(new Error(errorMessages.CITY)).required(),
  is_main_station: Joi.boolean()
    .error(new Error(errorMessages.ACTIVE))
    .required(),
  image_urls: Joi.array().error(new Error(errorMessages.IMAGE_URL)).required(),
  pincode: Joi.string().error(new Error(errorMessages.PINCODE)).required(),
  location: Joi.object().error(new Error(errorMessages.LOCATION)).required(),
  history: Joi.object().error(new Error(errorMessages.HISTORY)).required(),
  theme: Joi.string().error(new Error(errorMessages.THEME_INVALID)),
  //.required()
});

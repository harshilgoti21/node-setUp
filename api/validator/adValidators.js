const Joi = require("joi");
const errorMessages = require("../constant/errorMessage");

exports.create = Joi.object().keys({
  title: Joi.string().error(new Error(errorMessages.TITLE_INVALID)).required(),
  description: Joi.string()
    .error(new Error(errorMessages.DESCRIPTION_INVALID))
    .required(),
  category_id: Joi.string()
    .error(new Error(errorMessages.CATEGORY_ID_INVALID))
    .required(),
  type: Joi.string().error(new Error(errorMessages.TYPE)).required(),
  client_name: Joi.string()
    .error(new Error(errorMessages.CLIENT_NAME))
    .required(),
  start_date: Joi.string()
    .error(new Error(errorMessages.START_DATE))
    .required(),
  end_date: Joi.string().error(new Error(errorMessages.END_DATE)).required(),
  image_url: Joi.string().error(new Error(errorMessages.IMAGE_URL)).required(),
  link_url: Joi.string().error(new Error(errorMessages.LINK_URL)).required(),
  total_impression_count: Joi.any()
    .error(new Error(errorMessages.TOTAL_IMPRESSION))
    .optional(),
  total_clicks_count: Joi.any()
    .error(new Error(errorMessages.TOTAL_CLICKS))
    .optional(),
});

exports.update = Joi.object().keys({
  title: Joi.string().error(new Error(errorMessages.TITLE_INVALID)).required(),
  description: Joi.string()
    .error(new Error(errorMessages.DESCRIPTION_INVALID))
    .required(),
  category_id: Joi.string()
    .error(new Error(errorMessages.CATEGORY_ID_INVALID))
    .required(),
  type: Joi.string().error(new Error(errorMessages.TYPE)).required(),
  client_name: Joi.string()
    .error(new Error(errorMessages.CLIENT_NAME))
    .required(),
  start_date: Joi.string()
    .error(new Error(errorMessages.START_DATE))
    .required(),
  end_date: Joi.string().error(new Error(errorMessages.END_DATE)).required(),
  image_url: Joi.string().error(new Error(errorMessages.IMAGE_URL)).required(),
  link_url: Joi.string().error(new Error(errorMessages.LINK_URL)).required(),
});

exports.updateTotalImpressionCount = Joi.object().keys({
  total_impression_count: Joi.any().error(
    new Error(errorMessages.TOTAL_IMPRESSION)
  ),
});

exports.updateTotalClickCount = Joi.object().keys({
  total_clicks_count: Joi.any().error(new Error(errorMessages.TOTAL_CLICKS)),
});

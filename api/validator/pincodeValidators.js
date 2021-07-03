const Joi = require("joi");
const errorMessages = require("../constant/errorMessage");

exports.create = Joi.object().keys({
  pincode: Joi.any().error(new Error(errorMessages.PINCODE)).required(),
});

exports.update = Joi.object().keys({
  pincode: Joi.any().error(new Error(errorMessages.PINCODE)).required(),
});

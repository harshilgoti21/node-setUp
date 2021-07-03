const Joi = require("joi");
const errorMessages = require("../constant/errorMessage");

exports.login = Joi.object().keys({
  email: Joi.string()
    .min(3)
    .max(100)
    .email()
    .error(new Error(errorMessages.EMAIL))
    .required(),
  password: Joi.string()
    .min(8)
    .error(new Error(errorMessages.PASSWORD))
    .required(),
});

const Joi = require("joi");
const errorMessages = require("../constant/errorMessage");

exports.upload = Joi.object().keys({
  file: Joi.object().error(new Error(errorMessages.UPLOAD_FILE)).optional(),
});

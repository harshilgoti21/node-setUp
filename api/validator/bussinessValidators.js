const Joi = require("joi");
const { Err } = require("joi/lib/errors");
const errorMessages = require("../constant/errorMessage");

exports.create = Joi.object().keys({
  active: Joi.boolean().error(new Error(errorMessages.ACTIVE)).required(),
  area_slug: Joi.string().error(new Error(errorMessages.AREA)).required(),
  slug: Joi.string().error(new Error(errorMessages.SLUG)).required(),
  type: Joi.string().error(new Error(errorMessages.TYPE)).required(),
  title: Joi.string().error(new Error(errorMessages.TITLE_INVALID)).required(),
  email: Joi.string().error(new Error(errorMessages.EMAIL)).required(),
  is_paid: Joi.boolean()
    .error(new Error(errorMessages.IS_PAID_INVALID))
    .required(),
  how_to_reach: Joi.object()
    .error(new Error(errorMessages.HOW_TO_REACH_INVALID))
    .required(),
  primary_phone: Joi.string()
    .error(new Error(errorMessages.PRIMARY_PHONE_INVALID))
    .required(),
  secondary_phone: Joi.string()
    .error(new Error(errorMessages.SECONDARY_PHONE_INVALID))
    .required(),
  address: Joi.string().error(new Error(errorMessages.ADDRESS)).required(),
  description: Joi.string()
    .error(new Error(errorMessages.DESCRIPTION_INVALID))
    .required(),
  business_image_url: Joi.string()
    .error(new Error(errorMessages.BUSINESS_IMAGE_URL))
    .required(),
  other_image: Joi.object()
    .error(new Error(errorMessages.OTHER_IMAGE))
    .required(),
  services_offered: Joi.array()
    .error(new Error(errorMessages.SERVICES_OFFERED_INVALID))
    .required(),
  gallery_image_urls: Joi.array()
    .error(new Error(errorMessages.GALLERY_IMAGE_URL))
    .required(),
  gallery_video_url: Joi.string()
    .error(new Error(errorMessages.GALLERY_IMAGE_URL))
    .required(),
  features: Joi.array()
    .error(new Error(errorMessages.FEATURES_INVALID))
    .required(),
  website: Joi.string()
    .error(new Error(errorMessages.WEBSITE_INVALID))
    .required(),
  location: Joi.object().error(new Error(errorMessages.LOCATION)).required(),
  category_slug: Joi.string()
    .error(new Error(errorMessages.CATEGORY_SLUG))
    .required(),
  sub_category_name: Joi.string()
    .error(new Error(errorMessages.SUB_CATEGORY_INVALID))
    .required(),
  timing: Joi.object().error(new Error(errorMessages.TIMING)).required(),
  history: Joi.object().error(new Error(errorMessages.HISTORY)),
  // .required(),
  tags: Joi.array().error(new Error(errorMessages.TAG)).required(),
  total_visits_count: Joi.number()
    .error(new Error(errorMessages.TOTAL_VISITS_COUNT))
    .optional(),
  theme: Joi.string().required(),
});

exports.update = Joi.object().keys({
  active: Joi.boolean().error(new Error(errorMessages.ACTIVE)).required(),
  area_slug: Joi.string().error(new Error(errorMessages.AREA)).required(),
  slug: Joi.string().error(new Error(errorMessages.SLUG)).required(),
  type: Joi.string().error(new Error(errorMessages.TYPE)).required(),
  title: Joi.string().error(new Error(errorMessages.TITLE)).required(),
  email: Joi.string().error(new Error(errorMessages.EMAIL)).required(),
  is_paid: Joi.boolean()
    .error(new Error(errorMessages.IS_PAID_INVALID))
    .required(),
  how_to_reach: Joi.object()
    .error(new Error(errorMessages.HOW_TO_REACH_INVALID))
    .required(),
  primary_phone: Joi.string()
    .error(new Error(errorMessages.PRIMARY_PHONE_INVALID))
    .required(),
  secondary_phone: Joi.string()
    .error(new Error(errorMessages.SECONDARY_PHONE_INVALID))
    .required(),
  address: Joi.string().error(new Error(errorMessages.ADDRESS)).required(),
  description: Joi.string()
    .error(new Error(errorMessages.DESCRIPTION_INVALID))
    .required(),
  business_image_url: Joi.string()
    .error(new Error(errorMessages.BUSINESS_IMAGE_URL))
    .required(),
  other_image: Joi.object()
    .error(new Error(errorMessages.OTHER_IMAGE))
    .required(),
  services_offered: Joi.array()
    .error(new Error(errorMessages.SERVICES_OFFERED_INVALID))
    .required(),
  gallery_image_urls: Joi.array()
    .error(new Error(errorMessages.GALLERY_IMAGE_URL))
    .required(),
  gallery_video_url: Joi.string()
    .error(new Error(errorMessages.GALLERY_IMAGE_URL))
    .required(),
  features: Joi.array()
    .error(new Error(errorMessages.FEATURES_INVALID))
    .required(),
  website: Joi.string()
    .error(new Error(errorMessages.WEBSITE_INVALID))
    .required(),
  location: Joi.object().error(new Error(errorMessages.LOCATION)).required(),
  category_slug: Joi.string()
    .error(new Error(errorMessages.CATEGORY_SLUG))
    .required(),
  sub_category_name: Joi.string()
    .error(new Error(errorMessages.SUB_CATEGORY_INVALID))
    .required(),
  timing: Joi.object().error(new Error(errorMessages.TIMING)).required(),
  history: Joi.object().error(new Error(errorMessages.HISTORY)),
  // .required(),
  tags: Joi.array().error(new Error(errorMessages.TAG)).required(),
  theme: Joi.string().required(),
});

exports.updateTotalVisitCount = Joi.object().keys({
  total_visits_count: Joi.number()
    .error(new Error(errorMessages.TOTAL_VISITS_COUNT))
    .optional(),
});

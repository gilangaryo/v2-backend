const Joi = require('joi');
const { ResponseError } = require('../error/response-error');

// User validation schema
const registerSchema = Joi.object({
    name: Joi.string().pattern(/^[a-zA-Z\s]+$/).min(3).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(30).required(),
    phone: Joi.string().pattern(/^[0-9]+$/).min(10).max(15).required(),
    role: Joi.string().valid('admin', 'driver', 'superadmin').required(),
    profilePicture: Joi.string().uri().optional(),
    isSuperAdmin: Joi.boolean().default(false)
});
const updateSchema = Joi.object({
    name: Joi.string().pattern(/^[a-zA-Z\s]+$/).min(3).max(30),
    email: Joi.string().email(),
    password: Joi.string().min(6).max(30),
    phone: Joi.string().pattern(/^[0-9]+$/).min(10).max(15),
    role: Joi.string().valid('admin', 'driver', 'superadmin'),
    profilePicture: Joi.string().uri().optional(),
    isSuperAdmin: Joi.boolean().default(false)
});

const loginUserValidation = Joi.object({
    email: Joi.string().email().max(100).required(),
    password: Joi.string().max(100).required()
});

module.exports = {
    registerSchema,
    updateSchema,
    loginUserValidation
};

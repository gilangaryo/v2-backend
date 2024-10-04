const Joi = require('joi');

const createVendorSchema = Joi.object({
    name: Joi.string().min(3).max(50).required(),
    address: Joi.string().min(10).max(100).required(),
    email: Joi.string().email().required(),
    phone: Joi.string().pattern(/^[0-9]+$/).min(10).max(15).required(),
    logo: Joi.string().uri().optional(),
    description: Joi.string().max(255).optional(),
});

const updateVendorSchema = Joi.object({

    name: Joi.string().min(3).max(50),
    address: Joi.string().min(10).max(100),
    email: Joi.string().email(),
    phone: Joi.string().pattern(/^[0-9]+$/).min(10).max(15),
    logo: Joi.string().uri().optional(),
    description: Joi.string().max(255).optional(),
});

module.exports = {
    createVendorSchema,
    updateVendorSchema
};

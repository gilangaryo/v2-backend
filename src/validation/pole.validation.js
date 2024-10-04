const Joi = require('joi');

// Pole validation schema for creating a new pole
const createPoleSchema = Joi.object({
    name: Joi.string().min(3).max(50).required(),
    type: Joi.string().min(2).max(30).required(),
    productNumber: Joi.string().min(5).max(20).required(),
    manufacturingDate: Joi.date().iso().required(),
});

// Pole validation schema for updating a pole
const updatePoleSchema = Joi.object({
    name: Joi.string().min(3).max(50),
    type: Joi.string().min(2).max(30),
    productNumber: Joi.string().min(5).max(20),
    manufacturingDate: Joi.date().iso(),
});

module.exports = {
    createPoleSchema,
    updatePoleSchema
};

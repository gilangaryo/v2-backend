const poleRepository = require('./pole.repository');
const { ResponseError } = require('../../error/response-error')
const { createPoleSchema, updatePoleSchema } = require('../../validation/pole.validation');
const { validate } = require('../../validation/validation');

class PoleService {
    async createPole(data) {
        validate(createPoleSchema, data);
        return await poleRepository.createPole(data);
    }

    async getAllPoles() {
        const poles = await poleRepository.getAllPoles();
        if (!poles || poles.length === 0) {
            throw new ResponseError(404, 'No poles found');
        }
        return poles;
    }

    async getPoleById(id) {
        if (!Number.isInteger(parseInt(id))) {
            throw new ResponseError(400, 'Invalid Pole ID');
        }
        const pole = await poleRepository.getPoleById(id);
        if (!pole) {
            throw new ResponseError(404, 'Pole not found');
        }
        return pole;
    }

    async updatePole(id, data) {
        validate(updatePoleSchema, data);
        const existingPole = await poleRepository.getPoleById(id);
        if (!existingPole) {
            throw new ResponseError(404, 'Pole not found');
        }
        return await poleRepository.updatePole(id, data);
    }

    async deletePole(id) {
        if (!Number.isInteger(parseInt(id))) {
            throw new ResponseError(400, 'Invalid Pole ID');
        }
        await poleRepository.deletePole(id);
    }
}

module.exports = new PoleService();

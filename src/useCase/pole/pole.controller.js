const poleService = require('./pole.service');

class PoleController {
    async createPole(req, res, next) {
        try {
            const pole = await poleService.createPole(req.body);
            res.status(201).json({
                status: 201,
                success: true,
                message: 'Pole created successfully',
                data: pole
            });
        } catch (error) {
            next(error);
        }
    }

    async getAllPoles(req, res, next) {
        try {
            const poles = await poleService.getAllPoles();
            res.status(200).json({
                status: 200,
                success: true,
                message: 'Poles retrieved successfully',
                data: poles
            });
        } catch (error) {
            next(error);
        }
    }

    async getPoleById(req, res, next) {
        try {
            const pole = await poleService.getPoleById(req.params.id);
            res.status(200).json({
                status: 200,
                success: true,
                message: 'Pole retrieved successfully',
                data: pole
            });
        } catch (error) {
            next(error);
        }
    }

    async updatePole(req, res, next) {
        try {
            const pole = await poleService.updatePole(req.params.id, req.body);
            res.status(200).json({
                status: 200,
                success: true,
                message: 'Pole updated successfully',
                data: pole
            });
        } catch (error) {
            next(error);
        }
    }

    async deletePole(req, res, next) {
        try {
            await poleService.deletePole(req.params.id);
            res.status(200).json({
                status: 200,
                success: true,
                message: 'Pole deleted successfully'
            });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new PoleController();

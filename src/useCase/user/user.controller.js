// controllers/userController.js
const userService = require('./user.service');

class UserController {
    async createUser(req, res, next) {
        try {
            const user = await userService.createUser(req.body);
            res.status(201).json({
                status: 201,
                success: true,
                message: 'User created successfully',

            });
        } catch (error) {
            next(error);
        }
    }

    async loginUser(req, res, next) {
        try {

            const user = await userService.loginService(req.body);

            res.status(200).json({
                status: 200,
                success: true,
                message: 'User login successfully',
                data: user
            });
        } catch (error) {
            next(error);
        }
    }

    async getUserById(req, res, next) {
        try {
            const user = await userService.getUserById(req.params.id);
            res.status(200).json({
                status: 200,
                success: true,
                message: 'User retrieved successfully',
                data: user
            });
        } catch (error) {
            next(error);
        }
    }

    async getAllUsers(req, res, next) {
        try {
            const users = await userService.getAllUsers();

            res.status(200).json({
                status: 200,
                success: true,
                message: 'Users retrieved successfully',
                data: users
            });
        } catch (error) {
            next(error);
        }
    }

    async updateUser(req, res, next) {
        try {
            const user = await userService.updateUser(req.params.id, req.body);
            res.status(200).json({
                status: 200,
                success: true,
                message: 'Users updated successfully',
                // data: user
            });
        } catch (error) {
            next(error);
        }
    }

    async deleteUser(req, res) {
        try {
            const result = await userService.deleteUser(req.params.id);
            res.status(200).json({ message: 'User deleted' });
        } catch (error) {
            res.status(500).json({ error: 'Error deleting user' });
        }
    }
}

module.exports = new UserController();

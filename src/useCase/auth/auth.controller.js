
const authService = require('./auth.service');

class AuthController {

    async login(req, res, next) {
        try {

            const auth = await authService.loginService(req.body);

            res.status(200).json({
                status: 200,
                success: true,
                message: 'Login successfully',
                data: auth
            });
        } catch (error) {
            next(error);
        }
    }

}

module.exports = new AuthController();


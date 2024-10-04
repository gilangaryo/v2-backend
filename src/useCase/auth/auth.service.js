const userRepository = require('../user/user.repository');
const authRepository = require('../auth/auth.repository');

const { loginUserValidation } = require('../../validation/user.validation');
const { validate } = require('../../validation/validation');
const { ResponseError } = require('../../error/response-error')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');


class AuthService {


    async loginService(data) {
        validate(loginUserValidation, data);

        const user = await userRepository.getUserByEmail(data.email);
        if (!user) {
            throw new ResponseError(400, "Username or password wrong");
        }
        const check = await bcrypt.compare(data.password, user.password);
        if (!check) {
            throw new ResponseError(400, 'Invalid password');
        }
        const accessToken = jwt.sign({ userId: user.id, }, process.env.JWT_SECRET, { expiresIn: '1h' })
        const refreshToken = jwt.sign({ userId: user.id, }, process.env.JWT_SECRET, { expiresIn: '24h' })
        await authRepository.updateTokenAdmin(user.id, refreshToken)
        return {
            userId: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
            profilePicture: user.profilePicture,
            accessToken,
            refreshToken
        }


        return {
            userId: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
            profilePicture: user.profilePicture,
            accessToken: token,
        };
    }



}

module.exports = new AuthService();

const userRepository = require('./user.repository');
const { registerSchema, updateSchema, loginUserValidation } = require('../../validation/user.validation');
const { validate } = require('../../validation/validation');
const { ResponseError } = require('../../error/response-error')
const bcrypt = require('bcrypt')

class UserService {
    async createUser(data) {
        const { email } = data;

        validate(registerSchema, data);

        const existingUser = await userRepository.getUserByEmail(email);

        if (existingUser) {
            throw new ResponseError(400, "Email sudah terdaftar");
        }

        const hashedPassword = await bcrypt.hash(data.password, 10);
        data.password = hashedPassword;

        const success = await userRepository.createUser(data);
        console.log(success);

        return success;
    }


    async getUserById(id) {
        if (!Number.isInteger(parseInt(id))) {
            throw new ResponseError(400, "Invalid user ID");
        }
        const user = await userRepository.getUserById(id);
        if (!user) {
            throw new ResponseError(404, "User not found");
        }
        return user;
    }

    async getAllUsers() {
        const users = await userRepository.getAllUsers();
        if (!users || users.length === 0) {
            throw new ResponseError(404, "Users empyty");
        }
        return users;
    }

    async updateUser(id, data) {
        const { password, ...updateData } = data;
        const existingUser = await userRepository.getUserById(id);

        if (!existingUser) {
            throw new ResponseError(404, "User not found");
        }
        validate(updateSchema, data);
        const success = await userRepository.updateUser(id, updateData);


        return success;
    }

    async deleteUser(id) {
        if (!Number.isInteger(parseInt(id))) {
            throw new ResponseError(400, "Invalid user ID");
        }
        return await userRepository.deleteUser(id);
    }


}

module.exports = new UserService();

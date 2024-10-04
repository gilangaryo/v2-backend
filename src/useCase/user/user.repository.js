// repositories/userRepository.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class UserRepository {

    async createUser(data) {
        return await prisma.user.create({
            data,
        });
    }
    async getUserById(id) {
        return await prisma.user.findUnique({
            where: { id: parseInt(id) },
            include: {
                password: false,
                createdAt: false,
                updatedAt: false,
            },

        });
    }
    async getUserByEmail(email) {
        return await prisma.user.findUnique({
            where: { email: email },
        });
    }

    async getAllUsers() {
        return await prisma.user.findMany({
            include: {
                password: false,

            },
        });
    }

    async updateUser(id, updateData) {
        return await prisma.user.update({
            where: { id: parseInt(id) },
            data: updateData
        });
    }


    async deleteUser(id) {
        return await prisma.user.delete({
            where: { id: parseInt(id) },
        });
    }
}

module.exports = new UserRepository();


// repositories/userRepository.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class AuthRepository {

    updateTokenAdmin = async (id, token) => {
        const pengurus = await prisma.user.update({
            where: {
                id
            },
            data: {
                refreshToken: token
            }
        })
        return pengurus
    }

}

module.exports = new AuthRepository();

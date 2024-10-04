const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class PoleRepository {
    async createPole(data) {
        return await prisma.pole.create({
            data
        });
    }

    async getAllPoles() {
        return await prisma.pole.findMany();
    }

    async getPoleById(id) {
        return await prisma.pole.findUnique({
            where: { poleId: parseInt(id) }
        });
    }

    async updatePole(id, updateData) {
        return await prisma.pole.update({
            where: { poleId: parseInt(id) },
            data: updateData
        });
    }

    async deletePole(id) {
        return await prisma.pole.delete({
            where: { poleId: parseInt(id) }
        });
    }
}

module.exports = new PoleRepository();

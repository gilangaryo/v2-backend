const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class VendorRepository {
    async createVendor(data) {
        return await prisma.vendor.create({
            data
        });
    }

    async getAllVendors() {
        return await prisma.vendor.findMany();
    }

    async getVendorById(id) {
        return await prisma.vendor.findUnique({
            where: { vendorId: parseInt(id) }
        });
    }
    async getVendorByEmail(data) {

        return await prisma.vendor.findUnique({
            where: { email: data.email }
        });
    }

    async updateVendor(id, updateData) {
        return await prisma.vendor.update({
            where: { vendorId: parseInt(id) },
            data: updateData
        });
    }

    async deleteVendor(id) {
        return await prisma.vendor.delete({
            where: { vendorId: parseInt(id) }
        });
    }
}

module.exports = new VendorRepository();

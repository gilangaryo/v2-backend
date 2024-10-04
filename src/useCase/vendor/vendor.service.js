const vendorRepository = require('./vendor.repository');
const { ResponseError } = require('../../error/response-error')
const { createVendorSchema, updateVendorSchema } = require('../../validation/vendor.validation');
const { validate } = require('../../validation/validation');

class VendorService {
    async createVendor(data) {
        validate(createVendorSchema, data);
        const existingUser = await vendorRepository.getUserByEmail(email);

        if (existingUser) {
            throw new ResponseError(409, "Email vendor already exists");
        }

        return await vendorRepository.createVendor(data);
    }

    async getAllVendors() {
        const vendors = await vendorRepository.getAllVendors();
        if (!vendors || vendors.length === 0) {
            throw new ResponseError(404, 'No vendors found');
        }
        return vendors;
    }

    async getVendorById(id) {
        if (!Number.isInteger(parseInt(id))) {
            throw new ResponseError(400, 'Invalid Vendor ID');
        }
        const vendor = await vendorRepository.getVendorById(id);
        if (!vendor) {
            throw new ResponseError(404, 'Vendor not found');
        }
        return vendor;
    }

    async updateVendor(id, data) {
        validate(updateVendorSchema, data);
        const existingVendor = await vendorRepository.getVendorById(id);
        if (!existingVendor) {
            throw new ResponseError(404, 'Vendor not found');
        }
        return await vendorRepository.updateVendor(id, data);
    }

    async deleteVendor(id) {
        if (!Number.isInteger(parseInt(id))) {
            throw new ResponseError(400, 'Invalid Vendor ID');
        }
        await vendorRepository.deleteVendor(id);
    }
}

module.exports = new VendorService();

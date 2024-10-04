const vendorService = require('./vendor.service');

class VendorController {
    async createVendor(req, res, next) {
        try {

            const vendor = await vendorService.createVendor(req.body);
            res.status(201).json({
                status: 201,
                success: true,
                message: 'Vendor created successfully',
                data: vendor
            });
        } catch (error) {
            next(error);
        }
    }

    async getAllVendors(req, res, next) {
        try {
            const vendors = await vendorService.getAllVendors();
            res.status(200).json({
                status: 200,
                success: true,
                message: 'Vendors retrieved successfully',
                data: vendors
            });
        } catch (error) {
            next(error);
        }
    }

    async getVendorById(req, res, next) {
        try {
            const vendor = await vendorService.getVendorById(req.body.email, req.params.id);
            res.status(200).json({
                status: 200,
                success: true,
                message: `Vendor ${req.params.id} retrieved successfully`,
                data: vendor
            });
        } catch (error) {
            next(error);
        }
    }

    async updateVendor(req, res, next) {
        try {
            const vendor = await vendorService.updateVendor(req.params.id, req.body);
            res.status(200).json({
                status: 200,
                success: true,
                message: 'Vendor updated successfully',
                data: vendor
            });
        } catch (error) {
            next(error);
        }
    }

    async deleteVendor(req, res, next) {
        try {
            await vendorService.deleteVendor(req.params.id);
            res.status(200).json({
                status: 200,
                success: true,
                message: 'Vendor deleted successfully'
            });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new VendorController();

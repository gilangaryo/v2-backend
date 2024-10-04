const express = require('express');
const poleController = require('./pole.controller');

const router = express.Router();

router.get('/', poleController.getAllPoles);
router.post('/', poleController.createPole);
router.get('/:id', poleController.getPoleById);
router.put('/:id', poleController.updatePole);
router.delete('/:id', poleController.deletePole);

module.exports = router;

const express = require('express');
const router = express.Router();

router.use('/auth', require('../useCase/auth'));
router.use('/link', require('../useCase/link'));
router.use('/message', require('../useCase/message'));
router.use('/post', require('../useCase/post'));
router.use('/overview', require('../useCase/overview'));


module.exports = router
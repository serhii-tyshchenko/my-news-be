const express = require('express');

const providersController = require('../controllers/providers');

const router = express.Router();

router.get('/', providersController.list);

router.get('/:id', providersController.getById);

module.exports = router;

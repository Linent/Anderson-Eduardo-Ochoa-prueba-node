const express = require('express');
const router = express.Router();
const promocionController = require('../controllers/promocionController');

router.get('/', promocionController.listarPromocionesPorDia);

module.exports = router;
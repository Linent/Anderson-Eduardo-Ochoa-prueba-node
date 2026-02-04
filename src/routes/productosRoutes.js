const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');

router.get('/', productoController.listarProductos);
router.get('/mas-vendidos', productoController.productosMasVendidos);

module.exports = router;
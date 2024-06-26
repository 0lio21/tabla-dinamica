const express = require('express');
const router = express.Router();
const tablaController = require('../controllers/tablaController');

router.post('/agregar-campo', tablaController.agregarCampo);
router.post('/guardar-datos-tabla', tablaController.guardarDatosTabla);

module.exports = router;

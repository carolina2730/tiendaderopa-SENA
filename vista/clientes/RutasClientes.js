const express = require('express');
const CRuta = require('../../controlador/admin/CrearClienteControlador');
const LRuta = require('../../controlador/clientes/LoginClienteControlador');

const router = express.Router();

router.post('/usuarios/crear', CRuta.crearCliente);
router.post('/usuarios/login', LRuta.validarCredenciales);

module.exports = router;
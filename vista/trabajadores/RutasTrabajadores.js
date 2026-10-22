const express = require('express')
const LTRuta = require('../../controlador/trabajadores/LoginTrabajadorControlador');

const router = express.Router();


router.post('/trabajadores/login', LTRuta.validarCredenciales);

module.exports = router;
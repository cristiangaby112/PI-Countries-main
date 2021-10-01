const { Router } = require('express');
const CountryRoute = require('./CountryRoute')
const ActivityRoute = require('./ActivityRoute')
//const express = require('express');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/countries", CountryRoute);
router.use('/activity', ActivityRoute);

module.exports = router;

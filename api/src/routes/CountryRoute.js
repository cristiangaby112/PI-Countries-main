const { Router } = require('express')
const { getCountries, getCountry } = require('../controllers/country.controller')
const router = Router();

router.get('/', getCountries);
router.get('/:id', getCountry);

module.exports = router;
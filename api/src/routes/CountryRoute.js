const { Router } = require('express')
const { getCountries, getCountryId, getCountryQuery} = require('../controllers/country.controller')
const router = Router();

router.get('/', getCountries);
router.get('/:id', getCountryId);
//router.get('/search', getCountryQuery)

module.exports = router;
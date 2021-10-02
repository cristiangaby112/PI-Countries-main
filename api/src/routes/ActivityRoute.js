const { Router } = require('express')
const { postActivity } = require('../controllers/activy.controllers')
const router = Router();

router.post('/', postActivity);

module.exports = router;
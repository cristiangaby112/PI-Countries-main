const { Router } = require('express')
const { postActivity, getActivity } = require('../controllers/activy.controllers')
const router = Router();

router.post('/', postActivity);
router.get('/', getActivity);

module.exports = router;
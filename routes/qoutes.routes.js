const router = require('express').Router();
const { QoutesController } = require('../controllers');

router.get('/quotes', QoutesController.index);
router.get('/quotes/all', QoutesController.get);
router.post('/quotes', QoutesController.add);

module.exports = router;

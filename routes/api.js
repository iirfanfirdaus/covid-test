const router = require('express').Router();
const apiController = require('../controllers/api');

router.get('/grafik1', apiController.grafik1);
router.get('/grafik2', apiController.grafik2);
router.get('/grafik3', apiController.grafik3);
module.exports = router;

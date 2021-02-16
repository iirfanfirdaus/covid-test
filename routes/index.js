const router = require('express').Router();
const adminController = require('../controllers/adminController');

router.get('/', adminController.viewDashboard);
router.get('/dashboard', adminController.viewDashboard);
router.get('/covid', adminController.viewCovid);
router.post('/covid', adminController.addCovid);
router.put('/covid', adminController.updateCovid);
router.delete('/covid/:id', adminController.deleteCovid);
router.post('/covid/filter', adminController.filterCovid);
router.get('/covid/export', adminController.exportCovid);

module.exports = router;

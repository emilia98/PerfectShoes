const router = require('express').Router();
const brandController = require('../controllers/brand');

router.get('/all', brandController.getAll);
router.post('/create', brandController.create);
router.get('/edit/:id', brandController.editGet);
router.post('/edit/:id', brandController.editPost);
router.get('/status/:id', brandController.changeActiveStatus);

module.exports = router;
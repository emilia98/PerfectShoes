const router = require('express').Router();
const hShoesController = require('../controllers/half');

// router.get('/all', brandController.getAll);
router.post('/create', hShoesController.create);
/*
router.get('/edit/:id', brandController.editGet);
router.post('/edit/:id', brandController.editPost);
router.get('/status/:id', brandController.changeActiveStatus);
*/
module.exports = router;
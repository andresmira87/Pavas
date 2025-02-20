const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryControllers');

router.get('/', categoryController.getAllCategories);
router.post('/', categoryController.createCategory);
router.delete('/', categoryController.deleteCategory);
router.getbyId('/', categoryController.getByIdCategory);
router.put('/', categoryController.updateCategory);
// Agrega las demás rutas (GET /:id, PUT /:id, DELETE /:id).

module.exports = router;
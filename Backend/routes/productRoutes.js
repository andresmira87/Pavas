const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/', productController.getAllProducts);
router.post('/', productController.createProduct);
router.delete('/', productController.deleteCategory);
router.getbyId('/', productController.getByIdCategory);
router.put('/', productController.updateCategory);
// Agrega las demás rutas (GET /:id, PUT /:id, DELETE /:id).

module.exports = router;
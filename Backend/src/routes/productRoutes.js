const express = require('express');
const ProductController = require('../controllets/productController');

const router = express.Router();

router.get('/list', ProductController.getAllProducts);
router.post('/create', ProductController.createProduct);

module.exports = router;

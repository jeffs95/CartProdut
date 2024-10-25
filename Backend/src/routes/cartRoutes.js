const express = require('express');
const CartController = require('../controllets/cartController');
const router = express.Router();

router.post('/add', CartController.addProductToCart);
router.put('/update', CartController.updateCartItem);
router.get('/:userId', CartController.getCart);

router.delete('/:userId/product/:productId', CartController.removeProductFromCart);

module.exports = router;

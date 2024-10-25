const Cart = require('../models/Cart');
const Product = require('../models/product');

const CartController = {
    addProductToCart: async (req, res) => {
        try {
            const { userId, productId, quantity } = req.body;
            const existingCartItem = await Cart.findOne({ where: { userId, productId } });

            if (existingCartItem) {
                existingCartItem.quantity += quantity;
                await existingCartItem.save();
            } else {
                await Cart.create({ userId, productId, quantity });
            }

            res.status(200).json({ message: 'Product added to cart' });
        } catch (error) {
            console.log("[ERROR] >>", error);
            res.status(500).json({ error: 'Error adding product to cart' });
        }
    },

    updateCartItem: async (req, res) => {
        try {
            const { userId, productId, quantity } = req.body;
            const cartItem = await Cart.findOne({ where: { userId, productId } });

            if (!cartItem) {
                return res.status(404).json({ error: 'Product not found in cart' });
            }
            cartItem.quantity = quantity;
            await cartItem.save();

            res.status(200).json(cartItem);
        } catch (error) {
            console.log("[ERROR] >>", error);
            res.status(500).json({ error: 'Error updating product in cart' });
        }
    },

    getCart: async (req, res) => {
        try {
            const { userId } = req.params;
            const cartItems = await Cart.findAll({
                where: { userId },
                include: [{ model: Product }],
            });            
            res.status(200).json(cartItems);
        } catch (error) {
            console.log("[ERROR] >>", error);
            res.status(500).json({ error: 'Error fetching cart' });
        }
    },

    removeProductFromCart: async (req, res) => {
        try {
            const { userId, productId } = req.params;
            const cartItem = await Cart.findOne({ where: { userId, productId } });
            if (!cartItem) {
                return res.status(404).json({ error: 'Product not found in cart' });
            }
            await cartItem.destroy();
            res.status(200).json({ message: 'Product removed from cart' });
        } catch (error) {
            console.log("[ERROR] >>", error);
            res.status(500).json({ error: 'Error removing product from cart' });
        }
    },
};

module.exports = CartController;

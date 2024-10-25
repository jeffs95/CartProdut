const Product = require('../models/product');

const ProductController = {
    createProduct: async (req, res) => {
        try {
            const { name, description, price, quantity } = req.body;
            const newProduct = await Product.create({ name, description, price, quantity });
            res.status(201).json(newProduct);
        } catch (error) {
            console.log("[ERROR] >>", error);
            res.status(500).json({ error: 'Error creating product' });
        }
    },
    getAllProducts: async (req, res) => {
        console.log("[getAllProducts]");
        
        try {
            const products = await Product.findAll();
            res.status(200).json(products);
        } catch (error) {
            console.log("[ERROR] >>", error);
            res.status(500).json({ error: 'Error fetching products' });
        }
    },
};

module.exports = ProductController;

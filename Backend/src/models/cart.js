const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');
const Product = require('./product');

const Cart = sequelize.define('cart', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    timestamps: false
});

Cart.belongsTo(Product, { foreignKey: 'productId' });

module.exports = Cart;

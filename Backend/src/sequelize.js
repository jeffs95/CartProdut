const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('cartproducts', 'postgres', 'admin', {
    host: 'localhost',
    dialect: 'postgres',
    logging: false,
});

module.exports = sequelize;

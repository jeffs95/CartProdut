const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./sequelize');
const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Rutas
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);

// Sincronizar la base de datos
const syncDatabase = async () => {
    try {
        await sequelize.sync();
        console.log('Database synchronized');
    } catch (error) {
        console.error('Error syncing database:', error);
    }
};

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    syncDatabase();
});

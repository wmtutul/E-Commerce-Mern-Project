import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config_db/db.js';
import authRoutes from './src/routes/authRoutes.js';
import productRoutes from './src/routes/productsRoutes.js';
import cartRoutes from './src/routes/cart.js';
import addressRoutes from './src/routes/address.js';
import orderRoutes from './src/routes/order.js';


dotenv.config();


const app = express();

app.use(cors()); // frontend and backend connect
app.use(express.json()); // To read Json data from frontend 



//======Routing=======

app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/address', addressRoutes);
app.use('/api/order',orderRoutes )


//======Database Connectivity============

const PORT = process.env.PORT || 7000;
connectDB();

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});





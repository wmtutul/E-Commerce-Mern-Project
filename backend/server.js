import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config_db/db.js';
import authRoutes from './src/routes/authRoutes.js';


dotenv.config();


const app = express();

app.use(cors()); // frontend and backend connect
app.use(express.json()); // To read Json data from frontend 



//======Routing=======

app.use('/api/auth', authRoutes);



//======Database Connectivity============

const PORT = process.env.PORT || 7000;
connectDB();

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config_db/db.js';


dotenv.config();


const app = express();

app.use(cors()); // frontend and backend connect
app.use(express.json()); // To read Json data from frontend 



//======Routing=======

app.get('/', (req, res) => {
    res.send('API is running....');
})




//======Database Connectivity============

connectDB();

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
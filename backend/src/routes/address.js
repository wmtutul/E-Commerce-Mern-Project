import express from 'express';
import { getAddresses, saveAddress } from '../controllers/addressController.js';


const router = express.Router();

router.post('/add', saveAddress);
router.get('/:userId', getAddresses);

export default router;


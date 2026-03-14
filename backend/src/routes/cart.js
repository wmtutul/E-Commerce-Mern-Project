import express from 'express';
import { addToCart, getCart, removeItem, updateQuantity } from '../controllers/cartController.js';



const router = express.Router();


// Add item to cart
router.post('/add', addToCart);

// Remove item from cart
router.post('/remove', removeItem);

// Update item quantity in cart
router.post('/update', updateQuantity);

// Get user's cart
router.get('/:userId', getCart);



export default router;
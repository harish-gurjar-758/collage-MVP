import express from 'express';
import { getAllUsers, getProfile, loginUser, registerUser, toggleUserStatus } from '../controllers/userControllers.js';
import { verifyToken } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/register', registerUser);
router.post('/login', loginUser);

router.get('/profile', verifyToken, getProfile);
router.post('toggale-user-status', toggleUserStatus);

router.get('/all-users', getAllUsers);

export default router;
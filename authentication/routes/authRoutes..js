import express from 'express'
import { loginUser } from '../controllers/authControllers';

const router = express.Router();

router.post("/login", loginUser);

export default router;
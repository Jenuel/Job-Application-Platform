import express from 'express'
import { applyToJob } from '../controllers/applicationController';

const router = express.Router();

router.post("/apply/:jobId", applyToJob);

export default router;
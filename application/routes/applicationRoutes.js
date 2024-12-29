import express from 'express'
import { applyToJob, updateApplication } from '../controllers/applicationController';

const router = express.Router();

router.post("/apply/:jobId", applyToJob);
router.patch("/apply/:appId", updateApplication);
export default router;
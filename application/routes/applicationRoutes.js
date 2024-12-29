import express from 'express'
import { getApplications, applyToJob, updateApplication } from '../controllers/applicationController';

const router = express.Router();

router.get("/all", getApplications);
router.post("/:jobId", applyToJob);
router.patch("/:appId", updateApplication);
export default router;
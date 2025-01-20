import express from 'express'
import { getApplications, getApplication, applyToJob, updateApplication } from '../controllers/applicationController.js';

const router = express.Router();

router.get("/all", getApplications);
router.get("/specific/:appId", getApplication);
router.post("/:jobId", applyToJob);
router.patch("update/:appId", updateApplication);
export default router;
import {Router} from "express";
import {authRequired} from "../middlewares/validateToken.js"
import {getJobs, createJob, deleteJob, updateJob, getJob} from "../controllers/jobs.controllers.js"

import {validateSchema} from "../middlewares/validatorMiddleware.js"
import { createJobSchema } from "../validators/job.schema.js";

const router = Router();

router.get('/jobs', authRequired, getJobs)
router.post('/job', authRequired, validateSchema(createJobSchema), createJob)
router.delete('/job/:id', authRequired, deleteJob)
router.put('/job/:id', authRequired, updateJob)
router.get('/job/:id', authRequired, getJob)

export default router;
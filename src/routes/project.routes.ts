import { Router } from "express";
import {
  createProjectHandler,
  getProjectHandler,
  updateProjectHandler,
  submitProjectHandler,
} from "../controllers/project.controller";
import { authenticate } from "../middleware/auth.middleware";

const router = Router();

router.post(
  "/teams/:id/project",
  authenticate,
  createProjectHandler
);

router.get(
  "/teams/:id/project",
  getProjectHandler
);

router.post(
  "/teams/:id/project/submit",
  authenticate,
  submitProjectHandler
);

router.patch(
  "/teams/:id/project",
  authenticate,
  updateProjectHandler
);

export default router;
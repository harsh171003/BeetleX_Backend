import { Router } from "express";
import { authenticate } from "../middleware/auth.middleware";
import {
  createScoreHandler,
  updateScoreHandler,
  getProjectScoresHandler,
} from "../controllers/score.controller";

const router = Router();

router.post(
  "/projects/:id/score",
  authenticate,
  createScoreHandler
);

router.patch(
  "/projects/:id/score",
  authenticate,
  updateScoreHandler
);

router.get(
  "/projects/:id/scores",
  getProjectScoresHandler
);

export default router;
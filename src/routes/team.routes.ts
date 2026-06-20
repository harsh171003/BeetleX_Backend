import { Router } from "express";
import { authenticate } from "../middleware/auth.middleware";
import {
  createTeamHandler,
  getTeamByIdHandler,
  joinTeamHandler,
  getTeamsByEventHandler,
} from "../controllers/team.controller";

const router = Router();

router.post(
  "/events/:id/teams",
  authenticate,
  createTeamHandler
);
router.post(
  "/join",
  authenticate,
  joinTeamHandler
);
router.get(
  "/events/:id/teams",
  getTeamsByEventHandler
);
router.get(
  "/:id",
  getTeamByIdHandler
);
export default router;

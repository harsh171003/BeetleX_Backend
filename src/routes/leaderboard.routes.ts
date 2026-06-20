import { Router } from "express";
import {
  getLeaderboardHandler,
} from "../controllers/leaderboard.controller";

const router = Router();

router.get(
  "/events/:id/leaderboard",
  getLeaderboardHandler
);

export default router;
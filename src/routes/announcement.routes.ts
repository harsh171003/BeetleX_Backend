import { Router } from "express";
console.log("Loading Announcement Routes...");
import { authenticate } from "../middleware/auth.middleware";
import {
  createAnnouncementHandler,
  getAnnouncementsHandler,
} from "../controllers/announcement.controller";

const router = Router();

router.post(
  "/events/:id/announcements",
  authenticate,
  createAnnouncementHandler
);

router.get("/test", (req, res) => {
  res.json({
    message: "announcement routes working"
  });
});

router.get(
  "/events/:id/announcements",
  getAnnouncementsHandler
);

export default router;

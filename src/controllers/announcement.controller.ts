import { Response } from "express";
import { AuthRequest } from "../middleware/auth.middleware";
import { createAnnouncement, getAnnouncementsByEvent } from "../services/announcement.service";

export const createAnnouncementHandler = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    const announcement =
      await createAnnouncement(
        req.params.id as string,
        req.userId!,
        req.body
      );

    res.status(201).json(announcement);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "Failed to create announcement",
    });
  }
};

export const getAnnouncementsHandler = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    const announcements =
      await getAnnouncementsByEvent(
        req.params.id as string
      );

    res.json(announcements);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "Failed to fetch announcements",
    });
  }
};
export {};
export const TEST_ANNOUNCEMENT = true;
import { Router } from "express";
import {
  createEventHandler,
  getEventsHandler,
  getEventBySlugHandler,
  updateEventHandler,
  deleteEventHandler,
  registerForEventHandler,
getMyRegistrationHandler,
cancelRegistrationHandler,
} from "../controllers/event.controller";
import { authenticate } from "../middleware/auth.middleware";

const router = Router();

router.get("/test", (req, res) => {
  res.json({
    message: "events route working"
  });
});

router.get("/", getEventsHandler);

router.get("/:slug", getEventBySlugHandler);

router.post("/", authenticate, createEventHandler);

router.patch(
  "/:id",
  authenticate,
  updateEventHandler
);

router.delete(
  "/:id",
  authenticate,
  deleteEventHandler
);

export default router;
router.post(
  "/:id/register",
  authenticate,
  registerForEventHandler
);

router.get(
  "/:id/registration",
  authenticate,
  getMyRegistrationHandler
);

router.delete(
  "/:id/registration",
  authenticate,
  cancelRegistrationHandler
);
import { Response } from "express";
import { AuthRequest } from "../middleware/auth.middleware";
import {
  createEvent,
  getEvents,
  getEventBySlug,
  updateEvent,
  deleteEvent,
  registerForEvent,
getMyRegistration,
cancelRegistration,

} from "../services/event.service";

export const getEventBySlugHandler = async (
  req: AuthRequest,
  res: Response
) => {
  try {

const event = await getEventBySlug(
  req.params.slug as string
);

    if (!event) {
      return res.status(404).json({
        error: "Event not found",
      });
    }

    res.json(event);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "Failed to fetch event",
    });
  }
};

export const createEventHandler = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    const event = await createEvent(
      req.body,
      req.userId!
    );

    res.status(201).json(event);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "Failed to create event",
    });
  }
};

export const getEventsHandler = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    const events = await getEvents();

    res.json(events);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "Failed to fetch events",
    });
  }
};
export const updateEventHandler = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    const event = await updateEvent(
      req.params.id as string,
      req.body
    );

    res.json(event);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "Failed to update event",
    });
  }
};
export const deleteEventHandler = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    await deleteEvent(
      req.params.id as string
    );

    res.json({
      message: "Event deleted",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "Failed to delete event",
    });
  }
};
export const registerForEventHandler = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    const registration =
      await registerForEvent(
        req.params.id as string,
        req.userId!
      );

    res.status(201).json(registration);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "Failed to register",
    });
  }
};

export const getMyRegistrationHandler = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    const registration =
      await getMyRegistration(
        req.params.id as string,
        req.userId!
      );

    res.json(registration);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "Failed to fetch registration",
    });
  }
};

export const cancelRegistrationHandler = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    await cancelRegistration(
      req.params.id as string,
      req.userId!
    );

    res.json({
      message: "Registration cancelled",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "Failed to cancel registration",
    });
  }
};
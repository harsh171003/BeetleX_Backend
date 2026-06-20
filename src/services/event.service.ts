import prisma from "../lib/prisma";

export const createEvent = async (
  data: any,
  organizerId: string
) => {
  return prisma.event.create({
    data: {
      ...data,
      organizerId,
    },
  });
};

export const getEvents = async () => {
  return prisma.event.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};
export const getEventBySlug = async (
  slug: string
) => {
  return prisma.event.findUnique({
    where: {
      slug,
    },
  });
};
export const updateEvent = async (
  id: string,
  data: any
) => {
  return prisma.event.update({
    where: {
      id,
    },
    data,
  });
};
export const deleteEvent = async (
  id: string
) => {
  return prisma.event.delete({
    where: {
      id,
    },
  });
};

export const registerForEvent = async (
  eventId: string,
  userId: string
) => {
  return prisma.registration.create({
    data: {
      eventId,
      userId,
    },
  });
};

export const getMyRegistration = async (
  eventId: string,
  userId: string
) => {
  return prisma.registration.findUnique({
    where: {
      eventId_userId: {
        eventId,
        userId,
      },
    },
  });
};

export const cancelRegistration = async (
  eventId: string,
  userId: string
) => {
  return prisma.registration.delete({
    where: {
      eventId_userId: {
        eventId,
        userId,
      },
    },
  });
};

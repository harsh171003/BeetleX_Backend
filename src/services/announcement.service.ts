import prisma from "../lib/prisma";

export const createAnnouncement = async (
  eventId: string,
  authorId: string,
  data: any
) => {
  return prisma.announcement.create({
    data: {
      eventId,
      authorId,
      title: data.title,
      body: data.body,
      priority: data.priority || "info",
      target: data.target || "all",
      isPublished: true,
      publishedAt: new Date(),
    },
  });
};
export const getAnnouncementsByEvent = async (
  eventId: string
) => {
  return prisma.announcement.findMany({
    where: {
      eventId,
      isPublished: true,
    },
    orderBy: {
      publishedAt: "desc",
    },
  });
};
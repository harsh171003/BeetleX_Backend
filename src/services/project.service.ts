import prisma from "../lib/prisma";

export const createProject = async (
  teamId: string,
  data: any
) => {
  const team = await prisma.team.findUnique({
    where: {
      id: teamId,
    },
  });

  if (!team) {
    throw new Error("Team not found");
  }

  return prisma.project.create({
    data: {
      teamId,
      eventId: team.eventId,
      title: data.title,
      description: data.description,
      techStack: data.techStack || [],
      demoUrl: data.demoUrl,
      repoUrl: data.repoUrl,
      deckUrl: data.deckUrl,
      videoUrl: data.videoUrl,
    },
  });
};
export const getProjectByTeam = async (
  teamId: string
) => {
  return prisma.project.findFirst({
    where: {
      teamId,
    },
  });
};
export const updateProject = async (
  teamId: string,
  data: any
) => {
  return prisma.project.updateMany({
    where: {
      teamId,
    },
    data,
  });
};
export const submitProject = async (
  teamId: string
) => {
  return prisma.project.updateMany({
    where: {
      teamId,
    },
    data: {
      status: "submitted",
      submittedAt: new Date(),
    },
  });
};
export const getProjectsByEvent = async (
  eventId: string
) => {
  return prisma.project.findMany({
    where: {
      eventId,
      status: "submitted",
    },
  });
};

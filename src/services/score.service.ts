import prisma from "../lib/prisma";

export const createScore = async (
  projectId: string,
  judgeId: string,
  data: any
) => {
  return prisma.score.create({
    data: {
      projectId,
      judgeId,
      innovation: data.innovation,
      technical: data.technical,
      impact: data.impact,
      presentation: data.presentation,
      comments: data.comments,
    },
  });
};

export const updateScore = async (
  projectId: string,
  judgeId: string,
  data: any
) => {
  return prisma.score.update({
    where: {
      projectId_judgeId: {
        projectId,
        judgeId,
      },
    },
    data: {
      innovation: data.innovation,
      technical: data.technical,
      impact: data.impact,
      presentation: data.presentation,
      comments: data.comments,
    },
  });
};

export const getScoresByProject = async (
  projectId: string
) => {
  return prisma.score.findMany({
    where: {
      projectId,
    },
  });
};
export const getScoresByEvent = async (
  eventId: string
) => {
  const projects =
    await prisma.project.findMany({
      where: {
        eventId,
      },
    });

  const projectIds = projects.map(
    (p) => p.id
  );

  return prisma.score.findMany({
    where: {
      projectId: {
        in: projectIds,
      },
    },
  });
};
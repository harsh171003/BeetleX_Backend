import prisma from "../lib/prisma";

export const getTeamById = async (
  teamId: string
) => {
  return prisma.team.findUnique({
    where: {
      id: teamId,
    },
  });
};

export const createTeam = async (
  eventId: string,
  leaderId: string,
  name: string
) => {
  const inviteCode = Math.random()
    .toString(36)
    .substring(2, 8)
    .toUpperCase();

  const team = await prisma.team.create({
    data: {
      eventId,
      leaderId,
      name,
      inviteCode,
    },
  });

  await prisma.teamMember.create({
    data: {
      teamId: team.id,
      userId: leaderId,
      role: "leader",
    },
  });

  return team;
};
export const getTeamByInviteCode = async (
  inviteCode: string
) => {
  return prisma.team.findUnique({
    where: {
      inviteCode,
    },
  });
};

export const joinTeam = async (
  teamId: string,
  userId: string
) => {
  return prisma.teamMember.create({
    data: {
      teamId,
      userId,
      role: "member",
    },
  });
};
export const getTeamsByEvent = async (
  eventId: string
) => {
  return prisma.team.findMany({
    where: {
      eventId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
};
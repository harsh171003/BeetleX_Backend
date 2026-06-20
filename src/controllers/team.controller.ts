import { Response } from "express";
import { AuthRequest } from "../middleware/auth.middleware";
import {
  createTeam,
  getTeamById,
  getTeamByInviteCode,
  joinTeam,
  getTeamsByEvent,
} from "../services/team.service";


export const createTeamHandler = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    const { name } = req.body;

    const team = await createTeam(
  req.params.id as string,
  req.userId!,
  name
);

    res.status(201).json(team);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "Failed to create team",
    });
  }
};
export const getTeamByIdHandler = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    const team = await getTeamById(
      req.params.id as string
    );

    if (!team) {
      return res.status(404).json({
        error: "Team not found",
      });
    }

    res.json(team);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "Failed to fetch team",
    });
  }
};
export const joinTeamHandler = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    const { inviteCode } = req.body;

    const team =
      await getTeamByInviteCode(
        inviteCode
      );

    if (!team) {
      return res.status(404).json({
        error: "Team not found",
      });
    }

    const member = await joinTeam(
      team.id,
      req.userId!
    );

    res.status(201).json(member);
  } catch (error: any) {
  console.error(error);

  if (error.code === "P2002") {
    return res.status(400).json({
      error: "Already a team member",
    });
  }

  res.status(500).json({
    error: "Failed to join team",
  });
}
};
export const getTeamsByEventHandler = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    const teams = await getTeamsByEvent(
      req.params.id as string
    );

    res.json(teams);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "Failed to fetch teams",
    });
  }
};
import { Response } from "express";
import { AuthRequest } from "../middleware/auth.middleware";
import {
  createScore,
  updateScore,
  getScoresByProject,
} from "../services/score.service";

export const createScoreHandler = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    const score = await createScore(
      req.params.id as string,
      req.userId!,
      req.body
    );

    res.status(201).json(score);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "Failed to create score",
    });
  }
};

export const updateScoreHandler = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    const score = await updateScore(
      req.params.id as string,
      req.userId!,
      req.body
    );

    res.json(score);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "Failed to update score",
    });
  }
};

export const getProjectScoresHandler = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    const scores = await getScoresByProject(
      req.params.id as string
    );

    res.json(scores);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "Failed to fetch scores",
    });
  }
};
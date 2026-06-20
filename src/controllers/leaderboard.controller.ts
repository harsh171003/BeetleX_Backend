import { Request, Response } from "express";
import { getProjectsByEvent } from "../services/project.service";
import { getScoresByEvent } from "../services/score.service";

export const getLeaderboardHandler =
  async (
    req: Request,
    res: Response
  ) => {
    try {
      const eventId =
        req.params.id as string;

      const projects =
        await getProjectsByEvent(
          eventId
        );

      const scores =
        await getScoresByEvent(
          eventId
        );

      const leaderboard =
        projects.map((project) => {
          const projectScores =
            scores.filter(
              (score) =>
                score.projectId ===
                project.id
            );

          const average =
            projectScores.length > 0
              ? projectScores.reduce(
                  (sum, score) =>
                    sum +
                    (
                      score.innovation +
                      score.technical +
                      score.impact +
                      score.presentation
                    ) /
                      4,
                  0
                ) /
                projectScores.length
              : 0;

          return {
            projectId:
              project.id,
            title:
              project.title,
            averageScore:
              Number(
                average.toFixed(2)
              ),
          };
        });

      leaderboard.sort(
        (a, b) =>
          b.averageScore -
          a.averageScore
      );

      res.json(leaderboard);
    } catch (error) {
      console.error(error);

      res.status(500).json({
        error:
          "Failed to load leaderboard",
      });
    }
  };
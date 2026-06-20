import { Request, Response } from "express";
import {
  createProject,
  getProjectByTeam,
  updateProject,
  submitProject,
} from "../services/project.service";

export const createProjectHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const project = await createProject(
      req.params.id as string,
      req.body
    );

    res.status(201).json(project);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "Failed to create project",
    });
  }
};
export const getProjectHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const project =
      await getProjectByTeam(
        req.params.id as string
      );

    if (!project) {
      return res.status(404).json({
        error: "Project not found",
      });
    }

    res.json(project);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "Failed to fetch project",
    });
  }
};
export const updateProjectHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const project = await updateProject(
      req.params.id as string,
      req.body
    );

    res.json(project);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "Failed to update project",
    });
  }
};
export const submitProjectHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const result = await submitProject(
      req.params.id as string
    );

    res.json(result);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "Failed to submit project",
    });
  }
};
import { Request, Response } from "express";
import { createUser, loginUser, getUserById } from "../services/auth.service";
import { generateToken } from "../lib/jwt";
import { AuthRequest } from "../middleware/auth.middleware";

export const register = async (req: Request, res: Response) => {
  try {
    const { email, fullName, username, password } = req.body;

    const user = await createUser(
      email,
      fullName,
      username,
      password
    );

    const { passwordHash, ...safeUser } = user;

    res.status(201).json(safeUser);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "Something went wrong",
    });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const user = await loginUser(
      email,
      password
    );

    const token = generateToken(user.id);

    const { passwordHash, ...safeUser } = user;

    res.json({
      token,
      user: safeUser,
    });
  } catch (error) {
    console.error(error);

    res.status(401).json({
      error: "Invalid credentials",
    });
  }
};

export const me = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    const user = await getUserById(req.userId!);

    if (!user) {
      return res.status(404).json({
        error: "User not found",
      });
    }

    const { passwordHash, ...safeUser } = user;

    res.json(safeUser);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "Something went wrong",
    });
  }
};
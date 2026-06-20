import prisma from "../lib/prisma";
import bcrypt from "bcrypt";

export const createUser = async (
  email: string,
  fullName: string,
  username: string,
  password: string
) => {
  const passwordHash = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      email,
      fullName,
      username,
      passwordHash,
    },
  });

  return user;
};

export const loginUser = async (
  email: string,
  password: string
) => {
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!user) {
    throw new Error("Invalid credentials");
  }

  const isValid = await bcrypt.compare(
    password,
    user.passwordHash
  );

  if (!isValid) {
    throw new Error("Invalid credentials");
  }

  return user;
};
export const getUserById = async (
  userId: string
) => {
  return prisma.user.findUnique({
    where: {
      id: userId,
    },
  });
};
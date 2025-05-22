import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

export const getAll = async (_: Request, res: Response) => {
  const users = await prisma.user.findMany();
  res.json(users);
};

export const checkAccess = async (req: Request, res: Response) => {
  const { telegramId } = req.body;

  const allowed = await prisma.allowedUser.findUnique({
    where: { telegramId: BigInt(telegramId) }
  });

  res.json({ access: !!allowed });
};

export const grantAccess = async (req: Request, res: Response) => {
  const { telegramId } = req.body;
  const added = await prisma.allowedUser.upsert({
    where: { telegramId: BigInt(telegramId) },
    update: {},
    create: { telegramId: BigInt(telegramId) }
  });
  res.json(added);
};

export const revokeAccess = async (req: Request, res: Response) => {
  const { telegramId } = req.body;
  const removed = await prisma.allowedUser.delete({
    where: { telegramId: BigInt(telegramId) }
  });
  res.json(removed);
};

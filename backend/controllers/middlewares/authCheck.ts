import { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const authCheck = async (req: Request, res: Response, next: NextFunction) => {
  const telegramId = req.body.telegramId;

  if (!telegramId) return res.status(401).json({ error: 'No telegramId provided' });

  const isAllowed = await prisma.allowedUser.findUnique({
    where: { telegramId: BigInt(telegramId) }
  });

  if (!isAllowed) return res.status(403).json({ error: 'Access denied' });

  next();
};

import { PrismaClient } from '@prisma/client';
import { Request, Response, NextFunction } from 'express';

const prisma = new PrismaClient();

export const logAction = (action: string) => {
  return async (req: Request, _: Response, next: NextFunction) => {
    const userId = req.body.userId || null;
    await prisma.log.create({
      data: {
        userId,
        action,
        meta: JSON.stringify({
          body: req.body,
          params: req.params
        })
      }
    });
    next();
  };
};

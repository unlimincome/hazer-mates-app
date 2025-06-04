import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getStats = async (_: Request, res: Response) => {
  try {
    const totalOrders = await prisma.order.count();
    const sumResult = await prisma.order.aggregate({ _sum: { totalPrice: true } });
    const totalSum = sumResult._sum.totalPrice ?? 0;
    const top = await prisma.order.groupBy({
      by: ['userId'],
      _count: { userId: true },
      orderBy: { _count: { userId: 'desc' } },
      take: 1
    });
    let topUser: string | null = null;
    if (top.length > 0) {
      const user = await prisma.user.findUnique({ where: { id: top[0].userId } });
      topUser = user?.username ?? null;
    }
    res.json({ totalOrders, totalSum, topUser });
  } catch (error) {
    res.status(500).json({ error: 'Ошибка при получении статистики' });
  }
};

import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

export const getAll = async (_: Request, res: Response) => {
  const orders = await prisma.order.findMany({
    include: {
      items: {
        include: {
          product: true
        }
      },
      user: true
    },
    orderBy: { createdAt: 'desc' }
  });
  res.json(orders);
};

export const create = async (req: Request, res: Response) => {
  const { userId, totalPrice, comment, items } = req.body;

  const order = await prisma.order.create({
    data: {
      userId,
      totalPrice,
      comment,
      items: {
        create: items.map((item: any) => ({
          productId: item.productId,
          quantity: item.quantity
        }))
      }
    }
  });

  for (const item of items) {
    await prisma.product.update({
      where: { id: item.productId },
      data: { quantity: { decrement: item.quantity } }
    });
  }

  res.json(order);
};

export const update = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const { items, totalPrice, comment } = req.body;

  const oldItems = await prisma.orderItem.findMany({ where: { orderId: id } });
  for (const old of oldItems) {
    await prisma.product.update({
      where: { id: old.productId },
      data: { quantity: { increment: old.quantity } }
    });
  }

  await prisma.orderItem.deleteMany({ where: { orderId: id } });

  const updated = await prisma.order.update({
    where: { id },
    data: {
      totalPrice,
      comment,
      items: {
        create: items.map((item: any) => ({
          productId: item.productId,
          quantity: item.quantity
        }))
      }
    }
  });

  for (const item of items) {
    await prisma.product.update({
      where: { id: item.productId },
      data: { quantity: { decrement: item.quantity } }
    });
  }

  res.json(updated);
};

export const remove = async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  const orderItems = await prisma.orderItem.findMany({ where: { orderId: id } });
  for (const item of orderItems) {
    await prisma.product.update({
      where: { id: item.productId },
      data: { quantity: { increment: item.quantity } }
    });
  }

  await prisma.orderItem.deleteMany({ where: { orderId: id } });
  const deleted = await prisma.order.delete({ where: { id } });

  res.json(deleted);
};

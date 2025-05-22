import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

export const getAll = async (_: Request, res: Response) => {
  const products = await prisma.product.findMany();
  res.json(products);
};

export const create = async (req: Request, res: Response) => {
  const data = req.body;
  const product = await prisma.product.create({ data });
  res.json(product);
};

export const update = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const data = req.body;
  const updated = await prisma.product.update({ where: { id }, data });
  res.json(updated);
};

export const remove = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const deleted = await prisma.product.delete({ where: { id } });
  res.json(deleted);
};

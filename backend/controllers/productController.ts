import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Получить все продукты
export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await prisma.product.findMany();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Ошибка при получении продуктов' });
  }
};

// Получить продукт по ID
export const getProductById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const product = await prisma.product.findUnique({
      where: { id: parseInt(id, 10) },
    });
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ error: 'Продукт не найден' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Ошибка при получении продукта' });
  }
};

// Создать новый продукт
export const createProduct = async (req: Request, res: Response) => {
  const { name, category, quantity, note, favorite } = req.body;
  try {
    const newProduct = await prisma.product.create({
      data: {
        name,
        category,
        quantity,
        note,
        favorite,
      },
    });
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ error: 'Ошибка при создании продукта' });
  }
};

// Обновить продукт
export const updateProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, category, quantity, note, favorite } = req.body;
  try {
    const updatedProduct = await prisma.product.update({
      where: { id: parseInt(id, 10) },
      data: {
        name,
        category,
        quantity,
        note,
        favorite,
      },
    });
    res.json(updatedProduct);
  } catch (error) {
    res.status(500).json({ error: 'Ошибка при обновлении продукта' });
  }
};

// Удалить продукт
export const deleteProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await prisma.product.delete({
      where: { id: parseInt(id, 10) },
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Ошибка при удалении продукта' });
  }
};

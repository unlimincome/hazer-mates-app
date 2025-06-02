import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Получить все продукты
export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await prisma.product.findMany()
    res.json(products)
  } catch (err) {
    res.status(500).json({ error: 'Ошибка при получении товаров' })
  }
}

// Получить продукт по id
export const getProductById = async (req: Request, res: Response) => {
  try {
    const product = await prisma.product.findUnique({
      where: { id: Number(req.params.id) }
    })
    if (!product) return res.status(404).json({ error: 'Товар не найден' })
    res.json(product)
  } catch (err) {
    res.status(500).json({ error: 'Ошибка при получении товара' })
  }
}

// Добавить продукт
export const createProduct = async (req: Request, res: Response) => {
  try {
    const { name, category, type, quantity, price, description } = req.body
    const product = await prisma.product.create({
      data: { name, category, type, quantity, price, description }
    })
    res.status(201).json(product)
  } catch (err) {
    res.status(500).json({ error: 'Ошибка при создании товара' })
  }
}

// Обновить продукт
export const updateProduct = async (req: Request, res: Response) => {
  try {
    const { name, category, type, quantity, price, description } = req.body
    const product = await prisma.product.update({
      where: { id: Number(req.params.id) },
      data: { name, category, type, quantity, price, description }
    })
    res.json(product)
  } catch (err) {
    res.status(500).json({ error: 'Ошибка при обновлении товара' })
  }
}

// Удалить продукт
export const deleteProduct = async (req: Request, res: Response) => {
  try {
    await prisma.product.delete({
      where: { id: Number(req.params.id) }
    })
    res.json({ message: 'Товар удалён' })
  } catch (err) {
    res.status(500).json({ error: 'Ошибка при удалении товара' })
  }
}

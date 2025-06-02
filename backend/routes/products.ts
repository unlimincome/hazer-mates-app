import express from 'express'
import * as productController from '../controllers/productController'

const router = express.Router()

// Получить все продукты
router.get('/', productController.getAllProducts)

// Получить продукт по id
router.get('/:id', productController.getProductById)

// Добавить продукт
router.post('/', productController.createProduct)

// Обновить продукт
router.put('/:id', productController.updateProduct)

// Удалить продукт
router.delete('/:id', productController.deleteProduct)

export default router

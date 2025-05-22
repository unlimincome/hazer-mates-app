import express from 'express';
import * as orderController from '../controllers/orderController';

const router = express.Router();

router.get('/', orderController.getAll);
router.post('/', orderController.create);
router.put('/:id', orderController.update);
router.delete('/:id', orderController.remove);

export default router;

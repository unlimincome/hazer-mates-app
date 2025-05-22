import express from 'express';
import * as userController from '../controllers/userController';

const router = express.Router();

router.get('/', userController.getAll);
router.post('/check-access', userController.checkAccess);
router.post('/grant-access', userController.grantAccess);
router.post('/revoke-access', userController.revokeAccess);

export default router;

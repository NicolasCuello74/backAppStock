import { Router } from 'express';
import {
  createUser,
  getProd,
  postProd,
  postSubCategories,
  postCategories,
  getCategory,
  getUser,
} from '../controllers/index.js';

const router = Router();

router.get('/product', getProd);
router.get('/categories', getCategory);
router.get('/users', getUser);
router.post('/product', postProd);
router.post('/user', createUser);
router.post('/category', postCategories);
router.post('/subcategory', postSubCategories);

export default router;

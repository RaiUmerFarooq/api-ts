// routes.ts

import express from 'express';
import { Router } from 'express';
import controller from './controller';

const router: Router = express.Router();

router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.remove);

export default router;
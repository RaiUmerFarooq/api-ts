// controller.ts

import { Request, Response } from 'express';
import service from './service';

const getAll = (req: Request, res: Response): void => {
    const tasks = service.getAll();
    res.json(tasks);
};

const getById = (req: Request, res: Response): void => {
    const id = req.params.id;
    const task = service.getById(id);
    if (task) {
        res.json(task);
    } else {
        res.status(404).json({ error: 'Task not found' });
    }
};

const create = (req: Request, res: Response): void => {
    const newTask = req.body;
    
    const createdTask = service.create(newTask);
    res.status(201).json(createdTask);
};

const update = (req: Request, res: Response): void => {
    const id = req.params.id;
    const updatedTask = req.body;
    const result = service.update(id, updatedTask);
    if (result) {
        res.json(result);
    } else {
        res.status(404).json({ error: 'Task not found' });
    }
};

const remove = (req: Request, res: Response): void => {
    const id = req.params.id;
    const result = service.remove(id);
    if (result) {
        res.json(result);
    } else {
        res.status(404).json({ error: 'Task not found' });
    }
};

export default {
    getAll,
    getById,
    create,
    update,
    remove,
};
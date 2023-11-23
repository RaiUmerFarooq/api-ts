// service.ts

interface Task {
    id: string;
    title: string;
    description: string;
}

const data: Task[] = [];

const getAll = (): Task[] => {
    return data;
};

const getById = (id: string): Task | undefined => {
    return data.find(item => item.id === id);
};

const create = (newTask: Task): Task => {
    newTask.id = Date.now().toString();
    data.push(newTask);
    return newTask;
};

const update = (id: string, updatedTask: Task): Task | null => {
    const index = data.findIndex(item => item.id === id);
    if (index !== -1) {
        data[index] = { ...data[index], ...updatedTask };
        return data[index];
    }
    return null;
};

const remove = (id: string): Task | null => {
    const index = data.findIndex(item => item.id === id);
    if (index !== -1) {
        const removedTask = data.splice(index, 1);
        return removedTask[0];
    }
    return null;
};

export default {
    getAll,
    getById,
    create,
    update,
    remove,
};
const Task = require('../models/Task');

const getAllTasks = (req, res) => {
    res.send('<h1>All Tasks from controller</h1>');
}

const createTask = async (req, res) => {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
}

const getTask = (req, res) => {
    res.send({ 'id': req.params.id });
}

const updateTask = (req, res) => {
    res.send('<h1>Update a Task </h1>');
}

const deleteTask = (req, res) => {
    res.send('<h1>Delete a task</h1>');
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}
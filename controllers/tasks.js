const getAllTasks = (req, res) => {
    res.send('<h1>All Tasks from controller</h1>');
}

const createTask = (req, res) => {
    res.send('<h1>Create a Task</h1>');
}

const getTask = (req, res) => {
    res.send('<h1>Get a Single Task</h1>');
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
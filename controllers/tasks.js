const Task = require('../models/Task');

const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({});
        res.status(201).json({tasks});
    } catch (error) {
        res.status(500).json({ error });
    }
}

const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(201).json({ task });
    } catch (error) {
        res.status(500).json({ error });
    }
}
    


const getTask = async (req, res) => {
    try {
        const { id : taskID } = req.params;
        const task = await Task.findOne({ _id : taskID } );
        if (!task) {
            return res.status(404).json({ msg: `there is no task with id ${ taskID }` });
        }
        res.status(201).json({task});

    } catch (error) {
        res.status(500).json({ error });
    }

}

const updateTask = async (req, res) => {
   try {
        const { id : taskID } = req.params;
        const task = await Task.findByIdAndUpdate({ _id : taskID } , req.body, { new: true, runValidators:true } );
        if (!task) {
            return res.status(404).json({ msg: `there is no task with id ${ taskID }` });
        }
        res.status(201).json({ task });

   } catch (error) {
       res.status(500).json({ error });
   }
}

const deleteTask = async (req, res) => {
    try {
        const { id : taskID } = req.params;
        const task = await Task.findByIdAndDelete({ _id : taskID } );
        if (!task) {
            return res.status(404).json({ msg: `there is no task with id ${ taskID }` });
        }
        res.status(201).json({task});

    } catch (error) {
        res.status(500).json({ error });
    }
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}
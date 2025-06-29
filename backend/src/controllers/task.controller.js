const Task = require('../models/task.model');
const User = require('../models/user.model');


exports.createTask = async (req, res) => {
  try {
    const { title, description, dueDate, priority } = req.body;
    const task = new Task({
      title,
      description,
      dueDate,
      priority,
      ownerId: req.user.id,
    });

    await task.save();
    res.status(201).json({ message: 'Task created', task });
  } catch (err) {
    res.status(500).json({ message: 'Server error while creating task' });
  }
};


exports.getTasks = async (req, res) => {
  try {
    const userId = req.user.id;
    const tasks = await Task.find({
      $or: [
        { ownerId: userId },
        { sharedWith: userId }
      ]
    }).sort({ dueDate: 1 }); 

    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching tasks' });
  }
};


exports.updateTask = async (req, res) => {
  try {
    const taskId = req.params.id;
    const updates = req.body;
    const task = await Task.findById(taskId);

    if (!task) return res.status(404).json({ message: 'Task not found' });
    if (task.ownerId.toString() !== req.user.id) {
      return res.status(403).json({ message: 'Unauthorized' });
    }

    Object.assign(task, updates);
    await task.save();

    res.status(200).json({ message: 'Task updated', task });
  } catch (err) {
    res.status(500).json({ message: 'Error updating task' });
  }
};


exports.deleteTask = async (req, res) => {
  try {
    const taskId = req.params.id;
    const task = await Task.findById(taskId);

    if (!task) return res.status(404).json({ message: 'Task not found' });
    if (task.ownerId.toString() !== req.user.id) {
      return res.status(403).json({ message: 'Unauthorized' });
    }

    await task.remove();
    res.status(200).json({ message: 'Task deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting task' });
  }
};


exports.shareTask = async (req, res) => {
  try {
    const { email } = req.body;
    const taskId = req.params.id;
    const userToShare = await User.findOne({ email });

    if (!userToShare) return res.status(404).json({ message: 'User not found' });

    const task = await Task.findById(taskId);
    if (!task) return res.status(404).json({ message: 'Task not found' });
    if (task.ownerId.toString() !== req.user.id) {
      return res.status(403).json({ message: 'Unauthorized' });
    }

    if (!task.sharedWith.includes(userToShare._id)) {
      task.sharedWith.push(userToShare._id);
      await task.save();
    }

    res.status(200).json({ message: 'Task shared successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error sharing task' });
  }
};

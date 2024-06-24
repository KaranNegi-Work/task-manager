const db = require('../../models');
const taskSchema = require('../../validations/taskValidation');

class TaskController {
  async getAllTasks(req, res) {
    try {
      console.log("get all task API")
      const tasks = await db.task.findAll();
      res.json(tasks);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'An error occurred' });
    }
  };

  async createTask(req, res) {
    try {
      console.log("Request to create new Task " + req.body)
      const { error } = taskSchema.validate(req.body);
      if (error) return res.status(400).json({ error: error.details[0].message });
      const task = await db.task.create(req.body, {raw: true});
      res.status(201).json(task);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'An error occurred' });
    }
  };

  async updateTask(req, res) {
    try {
      console.log("Request to Update Task ", req.body)
      const { error } = taskSchema.validate(req.body);
      if (error) return res.status(400).json({ error: error.details[0].message });
      const id = parseInt(req.params.id);
      const task = await db.task.findByPk(id);
      if (task) {
        await db.task.update(req.body, {where: {id: id }});
        res.json({result: "success"});
      } else {
        res.status(404).json({ error: 'Task not found' });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'An error occurred' });
    }
  };

  async deleteTask(req, res) {
    try {
      console.log("Request to Delete Task: id "+ req.params.id)
      const task = await db.task.findByPk(req.params.id);
      if (task) {
        await task.destroy();
        res.status(204).json();
      } else {
        res.status(404).json({ error: 'Task not found' });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'An error occurred' });
    }
  };
}

module.exports = new TaskController()
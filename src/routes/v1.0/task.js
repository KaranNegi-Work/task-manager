const express = require('express');
const {
    "v1.0": {taskController}
} = require("../../controllers")
const router = express.Router();

router.post('/', taskController.createTask);
router.put('/:id', taskController.updateTask);
router.delete('/:id', taskController.deleteTask);

module.exports = router;
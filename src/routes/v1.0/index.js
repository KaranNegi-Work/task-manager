const express = require('express')
const COMMON_CONST = require("../../constants/common")
const router = express.Router();
const {
    "v1.0": {taskController}
} = require("../../controllers")

router.use(COMMON_CONST.TASK_API, require("./task"))
router.get(COMMON_CONST.GET_ALL_TASKS, taskController.getAllTasks);

module.exports = router
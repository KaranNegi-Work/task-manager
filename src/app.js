const express = require('express');
const bodyParser = require('body-parser');
const COMMON_CONST = require("./constants/common")

const app = express();
const port = process.env.HTTP_PORT || 3000;
app.use(bodyParser.json());
app.use(COMMON_CONST.TASK_MANAGER + COMMON_CONST.API , require('./routes'));
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});